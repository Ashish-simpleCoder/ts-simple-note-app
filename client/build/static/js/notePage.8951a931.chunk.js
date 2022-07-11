"use strict";(self.webpackChunksimple_note=self.webpackChunksimple_note||[]).push([[33],{5158:function(n,e,t){var r,i=t(168),o=t(885),a=t(2791),s=t(5751),c=t(184),u=function(n){var e=n.children,t=n.styles,r=(0,a.useState)(!1),i=(0,o.Z)(r,2),s=i[0],u=i[1];return(0,c.jsx)(l,{style:t,children:a.Children.map(e,(function(n){return"string"==typeof n.type?n:(0,a.cloneElement)(n,{focus:s,setFocus:u})}))})};e.Z=(0,a.memo)(u);var l=s.ZP.div(r||(r=(0,i.Z)(["\n    display:flex;\n    align-items:center;\n    width:100%;\n    height: clamp(3.5rem ,3.8rem, 3.8vw);\n    position:relative;\n    margin-top:6rem;\n    background-color: var(--form-group-bg);\n    border-radius: 0.5rem;\n\n    div.utility.invalid, div.utility.focus-border{\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        pointer-events: none;\n        border-radius: 0.5rem;\n        border: 1px solid transparent;\n    }\n\n\n    /* giving margin on email form field */\n    &:nth-of-type(1){\n        margin-top:3rem;\n    }\n    div.svg-container{\n        height: 100%;\n        width: 4rem;\n        display: grid;\n        place-items: center;\n    }\n\n    label{\n        position:absolute;\n        transform: translateX(5rem);\n        pointer-events:none;\n        transition:transform 0.3s;\n    }\n    .transform{\n        transform:translate(1rem, -170%);\n    }\n\n\n    >input{\n        padding-inline-end: 1rem;\n        flex: 1;\n        height: 100%;\n        outline: none;\n        background-color: transparent !important;\n    }\n\n"])))},629:function(n,e,t){t.d(e,{Z:function(){return x}});var r,i,o,a,s,c,u,l=t(168),d=t(2791),m=t(5751),f=t(1442),h=t(184),p=function(n){var e=n.py,t=n.px,r=n.w,i=n.h;return(0,h.jsxs)(b,{py:e,px:t,w:r,h:i,children:[(0,h.jsx)("div",{className:"circle c1"}),(0,h.jsx)("div",{className:"circle c2"})]})},v=(0,d.memo)(p),b=m.ZP.div(r||(r=(0,l.Z)(["\n   height:100%;\n   position:relative;\n   display:flex;\n   align-items:center;\n   justify-content:center;\n   text-align:center;\n\n   .circle{\n      position:absolute;\n      width:",";\n      height:",";\n      border-radius:50%;\n      border:clamp(0.3rem, 0.5rem,0.5vw) solid transparent;\n      border-top-color:purple;\n      animation: animate_loaders 1s linear infinite;\n   }\n\n   .c2{\n      border-bottom-color: red;\n      border-top-color:transparent;\n   }\n\n\n   @keyframes animate_loaders{\n      0%{\n         border-width: clamp(0.3rem, 0.5rem, 0.5vw);\n         transform: rotate(0);\n      }50%{\n         border-width: clamp(0.1rem,0.2rem,0.2vw);\n         transform: rotate(180deg);\n      }100%{\n         border-width: clamp(0.3rem, 0.5rem, 0.5vw);\n         transform: rotate(360deg);\n      }\n   }\n"])),(function(n){return n.w?n.w:"2rem"}),(function(n){return n.h?n.h:"2rem"})),g=function(n){var e=n.children,t=n.cn,r=n.onClick,i=n.mode,o=n.isDisabled,a=n.loader,s=n.style;return(0,h.jsxs)(y,{className:t,onClick:r,mode:i,disabled:o,style:s,children:[(0,h.jsxs)(f.Z,{condition:a,children:[" ",(0,h.jsx)(v,{})," "]}),(0,h.jsxs)(f.Z,{condition:!a&&n.redirect_text,children:[" ",n.redirect_text," "]}),(0,h.jsxs)(f.Z,{condition:!a,children:[" ",e," "]})]})},x=(0,d.memo)(g),y=m.ZP.button(i||(i=(0,l.Z)(["\n    text-decoration: none;\n    padding: clamp(0.3rem, 0.4rem, 0.4vw) clamp(0.7rem, 0.9rem, 0.9vw);\n    display: grid;\n    place-items: center;\n\n    :disabled{\n        background-color: #424242;\n        cursor: not-allowed;\n        border: none;\n        /* color: ; */\n        color: #979797;\n        /* width: 100%; */\n    }\n\n\n    transition: background 0.3s;\n    background-color: var(--body-bg);   // for theme-toggling button\n    cursor: pointer;\n    border: none;\n\n\n\n    ","\n"])),(function(n){switch(n.mode){case"hero_btn":return(0,m.iv)(o||(o=(0,l.Z)(["\n                padding:1rem 3rem;\n                /* height:unset; */\n                display:flex;\n                /* align-items:center;    //making text vertically center */\n                margin-top:3rem;\n                background-color: var(--brand);\n                font-weight:600;\n                box-shadow:0 0.2rem 0.2rem rgba(0, 0, 0, 0.3);\n                color: white;\n                box-shadow: var(--btn-shadow);\n            "])));case"toggle-nav-btn":return(0,m.iv)(a||(a=(0,l.Z)(["\n                margin-inline-start: auto;\n                z-index: 6;\n            "])));case"create_note_btn":return(0,m.iv)(s||(s=(0,l.Z)(["\n                background:var(--success-400);\n                /* color:hsl(0, 0%, 90%); */\n                /* box-shadow:0 0.2rem 0.2rem rgba(0, 0, 0, 0.3); */\n            "])));case"logout_btn":return(0,m.iv)(c||(c=(0,l.Z)(["\n                height:unset;\n            "])));case"login_form_btn":return(0,m.iv)(u||(u=(0,l.Z)(["\n                width:100%;\n                position: relative;\n                z-index: 2;\n                background-color: green;\n                color: white;\n                border: none;\n                height: 4rem;\n                /* &:before{\n                    content: '';\n                    position:absolute;\n                    left: 0;\n                    top: 0;\n                    height: 100%;\n                    width: 0px;\n                    transition: all 0.3s;\n                }\n                &:hover{\n                    color: white;\n                }\n                &:hover::before{\n                    width: 100%;\n                    background-color: var(--brand);\n                    z-index: -1;\n                } */\n            "])))}}))},8189:function(n,e,t){var r,i,o=t(168),a=t(1413),s=t(2791),c=t(5751),u=t(184),l=function(n){var e=(0,s.useCallback)((function(){var e;return null===(e=n.setFocus)||void 0===e?void 0:e.call(n,!0)}),[n.setFocus]),t=(0,s.useCallback)((function(e){var t;return null===(t=n.setFocus)||void 0===t?void 0:t.call(n,e.target.value.length>0)}),[n.setFocus]);return(0,u.jsx)(d,(0,a.Z)((0,a.Z)({},n),{},{onFocus:e,onBlur:t}))};e.Z=(0,s.memo)(l);var d=c.ZP.input(r||(r=(0,o.Z)(["\n    height: clamp(3.5rem, 3.5rem, 3.5vw);\n    padding-inline: 1rem;\n\n\n    &:focus + div.utility.focus-border{\n        /* background-color: var(--input-focus-bg); */\n        outline: 1px solid var(--outline);\n    }\n\n    /* "," */\n\n\n    /* &:invalid + div.invalid{\n        border-color: var(--dan-200);\n    }\n\n\n    &:valid + div.invalid{\n        border-color: var(--success-300);\n    } */\n"])),(function(n){if("search_bar"==n.mode)return(0,c.iv)(i||(i=(0,o.Z)(["\n            /* height: inherit; */\n            "])))}))},2041:function(n,e,t){var r,i,o=t(168),a=t(2791),s=t(5751),c=t(184),u=function(n){var e=n.children,t=n.style,r=n.cn,i=n.bg?"#".concat(Math.random().toString(16).slice(2,8)):"";return(0,c.jsx)(l,{style:t,className:r,bg_clr:i,children:e})};e.Z=(0,a.memo)(u);var l=s.ZP.span(r||(r=(0,o.Z)(["\n\n","\n\n"])),(function(n){var e=n.bg_clr;if(e)return(0,s.iv)(i||(i=(0,o.Z)(["\n            background: ",";\n        "])),e)}))},5042:function(n,e,t){var r,i=t(168),o=t(1413),a=t(2791),s=t(5751),c=t(184),u=function(n){var e=(0,a.useCallback)((function(){n.setFocus&&n.setFocus(!0)}),[n.setFocus]),t=(0,a.useCallback)((function(e){n.setFocus&&n.setFocus(e.target.value.length>0)}),[n.setFocus]);return(0,c.jsx)(l,(0,o.Z)((0,o.Z)({},n),{},{onFocus:e,onBlur:t}))};e.Z=(0,a.memo)(u);var l=s.ZP.textarea(r||(r=(0,i.Z)(["\n    font-size: 1.6rem;\n    padding-inline: 1rem;\n    background: var(--input-bg);\n    border: none;\n    border-radius: 0.5rem;\n\n    &:focus{\n        /* background-color: var(--input-focus-bg); */\n    }\n\n    /* &:invalid + div.invalid{\n        border-color: var(--dan-200);\n    }\n\n\n    &:valid + div.invalid{\n        border-color: var(--success-300);\n    } */\n"])))},8901:function(n,e,t){var r,i,o,a,s,c,u,l=t(168),d=t(2791),m=t(5751),f=t(184),h=function(n){var e=n.children,t=n.styles,r=n.mode,i=n.cn;return(0,f.jsx)(p,{mode:r,style:t,className:(r||"")+" "+(i||""),children:e})};e.Z=(0,d.memo)(h);var p=m.ZP.section(r||(r=(0,l.Z)(["\n    display:flex;\n    overflow:hidden;\n    position:relative;\n    padding:2rem;\n    --width: 30rem;\n\n    ","\n\n    img{\n        display:flex;\n        width:clamp(23rem, 28rem, 28vw);\n        height:clamp(28rem, 32rem, 32vw);\n        transform:rotate(-20deg) scale(0.8);\n        transform-origin:center;\n    }\n"])),(function(n){switch(n.mode){case"create_note_container":return(0,m.iv)(i||(i=(0,l.Z)(["\n                flex-direction: column;\n                margin-bottom:3rem;\n                input{\n                    margin-block-end: 2rem;\n                }\n                textarea{\n                    height: 60%;\n                    resize: none;\n                    margin-block-end: 3rem;\n                    @media (max-width: 700px){\n                        height: 15rem;\n                    }\n                }\n\n                @media (min-width:700px){\n                    height:100%;\n                    position:fixed;\n                    border-right: 1px solid var(--brand-border-200);\n                }\n            "])));case"sign_form_container":return(0,m.iv)(o||(o=(0,l.Z)(["\n                background-color: var(--form-bg);\n                box-shadow: var(--form-shadow);\n                border-radius: 0.5rem;\n                transform: translateY(3rem);\n\n                @media (max-width: 700px){\n                    form{\n                        padding-inline: unset;\n                    }\n                }\n\n\n                @media (min-width: 700px){\n                    display: flex;\n                    max-width: 70rem;\n                    padding-inline: 2rem;\n                    margin-inline: auto;\n                }\n            "])));case"notes-output-section":return(0,m.iv)(a||(a=(0,l.Z)(["\n                gap: 2rem;\n                flex-wrap: wrap;\n\n                @media (min-width:700px){\n                    position:relative;\n                    left:var(--width);\n                    width:calc(100% - var(--width));\n                    justify-content: space-around;\n                }\n            "])));case"notes_container":return(0,m.iv)(s||(s=(0,l.Z)(["\n                justify-content:center;\n                gap:3rem;\n                padding:2rem;\n                flex-wrap:wrap;\n                @media (min-width:700px){\n                    justify-content:space-around;\n                }\n            "])));case"edit_note":return(0,m.iv)(c||(c=(0,l.Z)(["\n                position:fixed;\n                inset:0;\n                background: rgba(0,0,0, 0.5);\n            "])));default:return(0,m.iv)(u||(u=(0,l.Z)(["\n            "])))}}))},8818:function(n,e,t){t.r(e),t.d(e,{default:function(){return bn}});var r,i,o,a,s,c,u=t(885),l=t(2791),d=t(6030),m=function(){return{color_menu:(0,d.v9)((function(n){return n.color_menu})),dispatch:(0,d.I0)()}},f=t(5120),h=t(6554),p=t(3305),v=t(1442),b=t(6871),g=t(7572),x=t(4955),y=t(184),w=function(n){var e=(0,b.s0)(),t=(0,g.Z)().user,r=(0,l.useMemo)((function(){return!t.email}),[t.email]),i=(0,x.Z)({shouldCheckIfUserLogged:r}),o=(0,u.Z)(i,1)[0],a=(0,l.useCallback)((function(){return e("/login")}),[]);return(0,l.useEffect)((function(){o&&a()}),[o]),(0,y.jsx)(y.Fragment,{children:n.children})},Z=(0,l.memo)(w),k=t(4866),j=t(168),C=t(5861),_=t(7757),E=t.n(_),S=t(5751),L=[{white:["#fff","#000"]},{green:["hsl(146, 85%, 75%)","hsl(146, 85%, 15%)"]},{yellow:["hsl(58, 85%, 75%)","hsl(58, 85%, 15%)"]},{purple:["hsl(276, 85%, 75%)","hsl(276, 85%, 15%)"]},{red:["hsl(348, 85%, 75%)","hsl(348, 85%, 15%)"]}],N=t(5789),P=function(n){var e=n.clr,t=n.handleClick,r=(0,N.Z)().theme,i=e[Object.keys(e)[0]][r?1:0],o=(0,l.useCallback)((function(n){return t(n,i,e)}),[e,i,t]);return(0,y.jsx)("div",{style:{background:i,width:"3rem",height:"3rem",borderRadius:"50%"},onClick:o})},T=(0,l.memo)(P),F=t(6862),R=t(5501),z=function(n){var e=n.styles,t=m(),r=t.color_menu,i=t.dispatch,o=(0,l.useCallback)(function(){var n=(0,C.Z)(E().mark((function n(e,t,o){var a,s;return E().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.stopPropagation(),null!==r&&void 0!==r&&r.item){n.next=3;break}return n.abrupt("return");case 3:if(!r.item.bg.includes(t)){n.next=5;break}return n.abrupt("return");case 5:return a=new Request("".concat("/api/user/note/color/").concat(r.item._id)),n.next=8,fetch(a,{credentials:"include",method:"PATCH",body:JSON.stringify({bg:o[Object.keys(o)[0]]}),headers:{"Content-Type":"application/json"}});case 8:return s=n.sent,n.next=11,s.json();case 11:n.sent.success&&(i((0,R.TZ)({bg:o[Object.keys(o)[0]],_id:r.item._id})),i((0,f.e_)(o[Object.keys(o)[0]])));case 13:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),[r]);return(0,y.jsx)(F.Z,{children:(0,y.jsx)(B,{className:"clr-list",style:e,children:L.map((function(n,e){return(0,y.jsx)(T,{clr:n,handleClick:o},e)}))})})},I=(0,l.memo)(z),B=S.ZP.div(r||(r=(0,j.Z)(["\n   display:flex;\n   position:fixed;\n   flex-direction:row;\n   align-items:center;\n   justify-content:space-between;\n   gap:1rem;\n   z-index:3;\n   >div{\n      cursor:pointer;\n   }\n"]))),q=t(1413),O=t(8189),A=t(5042),D=t(8901),M=function(){return{search:(0,d.v9)((function(n){return n.search.value})),dispatch:(0,d.I0)()}},J=t(9753),U=function(n){var e=n.eventName,t=void 0===e?"click":e,r=n.handler,i=n.element,o=void 0===i?window:i,a=n.run,s=void 0!==a&&a,c=(0,l.useRef)(r);(0,l.useEffect)((function(){c.current=r}),[r]),(0,l.useEffect)((function(){var n=function(n){r(n)};return s?null===o||void 0===o||o.addEventListener(t,n,!1):null===o||void 0===o||o.removeEventListener(t,n,!1),function(){null===o||void 0===o||o.removeEventListener(t,n,!1)}}),[t,o,s])},V=function(){var n=(0,g.Z)().dispatch,e=(0,l.useCallback)((0,C.Z)(E().mark((function e(){var t,r,i;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Request("/api/user/notes"),e.next=3,fetch(t,{method:"get",credentials:"include",headers:{"Content-Type":"application/json"}});case 3:return r=e.sent,e.next=6,r.json();case 6:(i=e.sent).notes&&n((0,R.U3)(i.notes));case 8:case"end":return e.stop()}}),e)}))),[]);(0,l.useEffect)((function(){e()}),[])},H=function(n){var e=n.note_id,t=(0,l.useRef)(e),r=(0,l.useRef)(),i=(0,l.useRef)();(0,l.useEffect)((function(){t.current=e}),[e]);var o=(0,l.useCallback)((function(n){var e=document.getElementById("modal"),t=document.getElementById(n);r.current=e,r.current.id=n,i.current=t,t.style.opacity="0";var o=t.getBoundingClientRect(),a=o.top,s=o.left,c=o.width,u=o.height;e.style.setProperty("--top",a+"px"),e.style.setProperty("--left",s+"px"),e.style.setProperty("--width",c+"px"),e.style.setProperty("--height",u+"px"),e.style.setProperty("--display","flex"),setTimeout((function(){document.body.classList.add("relative"),e.classList.add("expand-to-center")}),100)}),[]),a=(0,l.useCallback)((function(){var n;document.body.classList.remove("relative"),null===(n=r.current)||void 0===n||n.classList.remove("expand-to-center"),setTimeout((function(){i.current&&(i.current.style.opacity="1")}),250)}),[]);(0,l.useEffect)((function(){e&&setTimeout((function(){return o(t.current)})),!e&&setTimeout((function(){return a()}))}),[e,o])},X=t(3540),G=t(629),W=(0,l.memo)((function(n){var e=n.children,t=n.styles,r=n.handleClick,i=n.cn;return(0,y.jsx)(Q,{style:t,onClick:r,className:i,children:e})})),Q=S.ZP.h4(i||(i=(0,j.Z)(["\n    font-size:1.6rem;\n"]))),Y=function(n){var e=n.children,t=n.cn;return(0,y.jsx)(K,{className:t,children:e})},K=S.ZP.p(o||(o=(0,j.Z)(["\n    margin: 0;\n    font-weight: 500;\n"]))),$=t(2041),nn=function(){var n=(0,N.Z)().theme;return(0,y.jsx)("div",{children:(0,y.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:n?"hsl(0, 0%, 80%)":"hsl(0, 0%, 10%)",children:[(0,y.jsx)("path",{d:"M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"}),(0,y.jsx)("circle",{cx:"6.5",cy:"11.5",r:"1.5"}),(0,y.jsx)("circle",{cx:"9.5",cy:"7.5",r:"1.5"}),(0,y.jsx)("circle",{cx:"14.5",cy:"7.5",r:"1.5"}),(0,y.jsx)("circle",{cx:"17.5",cy:"11.5",r:"1.5"})]})})},en=(0,l.lazy)((function(){return t.e(537).then(t.bind(t,518))})),tn=function(n){var e=n.note,t=n.styles,r=n.mode,i=void 0===r?"note-page":r,o=m(),a=o.color_menu,s=o.dispatch,c=(0,p.Z)({width:750}),d=(0,u.Z)(c,1)[0],h=(0,l.useState)(!1),b=(0,u.Z)(h,2),g=b[0],x=b[1],w=(0,l.useCallback)((function(){return d&&x(!0)}),[d]),Z=(0,l.useCallback)((function(){return d&&x(!1)}),[d]),j=(0,l.useCallback)((function(n){var t=n.currentTarget.getBoundingClientRect(),r=t.top,i=t.left;s((0,f.BM)({enable:!a.enable,item:{_id:e._id,bg:e.bg},position:{top:r+20+"px",left:i+20+"px"}}))}),[]),C=(0,l.useState)({title:"",body:""}),_=(0,u.Z)(C,2),E=_[0],S=_[1],L=M().search,N=(0,l.useState)(n.isVisible&&void 0!=L),P=(0,u.Z)(N,2),T=P[0],F=P[1];return(0,l.useEffect)((function(){if(void 0!=L&&n.isVisible){F(!0);var t={title:"".concat(e.title.replace(L,'<mark style="color: black">'.concat(L,"</mark>"))),body:"".concat(e.body.replace(L,'<mark style="color: black;">'.concat(L,"</mark>")))};S(t)}else S({title:"",body:""}),F(!1)}),[n.isVisible,L]),(0,y.jsxs)(on,{id:e._id,style:t,className:"note",onMouseEnter:w,onMouseLeave:Z,children:[(0,y.jsxs)(D.Z,{styles:{padding:"0.5rem 1rem",borderBottom:"1px solid var(--border)"},children:[(0,y.jsx)($.Z,{cn:"random-span",bg:!0}),(0,y.jsxs)(W,{styles:{width:"100%",margin:0,textAlign:"center"},cn:"note-title",children:[(0,y.jsx)(v.Z,{condition:!T,children:e.title}),(0,y.jsx)(v.Z,{condition:T,children:(0,X.ZP)(E.title)})]})]}),(0,y.jsx)(D.Z,{styles:{overflow:"hidden",flex:"1",padding:"0.5rem 1rem"},children:(0,y.jsxs)(Y,{cn:"note-body",children:[(0,y.jsx)(v.Z,{condition:!T,children:e.body}),(0,y.jsx)(v.Z,{condition:T,children:(0,X.ZP)(E.body)})]})}),(0,y.jsx)(v.Z,{condition:!d||g,children:(0,y.jsx)(k.Z,{Comp:function(){return(0,y.jsx)(en,{cn:"note-overlay ".concat("recycle-page"==i?"recycle-overlay":""),children:(0,y.jsxs)(v.Z,{condition:"note-page"==i,children:[(0,y.jsx)(G.Z,{style:{backgroundColor:"transparent"},onClick:j,children:(0,y.jsx)(nn,{})}),(0,y.jsx)(G.Z,{mode:"delete_note_btn",cn:"note-delete-btn",children:"delete"})]})})}})})]})},rn=(0,l.memo)(tn),on=S.ZP.div(a||(a=(0,j.Z)(["\n    position:relative;\n    width: 100%;\n    height:20rem;\n    box-shadow:0 0.2rem 0.2rem rgba(0,0,0,0.2);\n    border-radius:0 0.5rem 0.5rem 0;\n    display:flex;\n    --direction: column;\n    flex-direction: var(--direction);\n    --note-menu-opacity:0;\n    /* animation:animate_note calc(0.3s  * var(--note-order)) ease-in; */\n\n    @media (min-width:700px){\n        max-width:40rem;\n    }\n\n\n    p{\n        opacity:0.9;\n        white-space:pre-line;\n        word-break:break-all;\n        width:100%;\n    }\n\n    /* random span at the left top of the note */\n    span.random-span{\n        position:absolute;\n        top:0;left:0;\n        width:5rem;\n        height:5rem;\n        border-radius:50%;\n        transform:translate(-50%, -50%);\n    }\n\n   span{\n        pointer-events: none;\n    }\n\n    @media (max-width:700px){\n        .overlay-menu{\n            display:none;\n        }\n        /* for bin page */\n        .bin-note-menu{\n            display:flex;\n        }\n    }\n\n    /* making the permanent delete and restore btn visible in bin page for every note */\n    .bin-note-menu{\n        --note-menu-opacity:1;\n    }\n    @media (min-width:700px){\n        --note-menu-opacity:0;\n        transition:all 0.3s;\n\n        div.overlay-menu {\n            height:4rem;\n            width:100%;\n            display:flex;\n            opacity:var(--note-menu-opacity);\n            pointer-events:none;\n        }\n        &:hover{\n            --note-menu-opacity:1;\n            div.overlay-menu{\n                pointer-events:all;\n            }\n        }\n    }\n\n    @keyframes animate_note{\n        0%{\n            transform: scale(0.8);\n            animation-timing-function: ease;\n        }\n        30%{\n            animation-timing-function: ease-in;\n            opacity: 1;\n            transform: scale(1.1);\n        }\n        60%{\n            animation-timing-function: ease-in;\n            transform: scale(0.9);\n        }\n        100%{  }\n}\n"]))),an=(0,l.memo)((function(n){var e=n.children,t=n.mode,r=n.bg,i=(n.noteToBeEdited,(0,N.Z)()),o=i.theme;i.dispatch;return(0,y.jsx)(F.Z,{children:(0,y.jsx)(sn,{mode:t,id:"modal",className:"edit-modal",style:{background:o?r[1]:r[0],border:"var(--border)"},children:e})})})),sn=S.ZP.form(s||(s=(0,j.Z)(["\n    transition:all 0.3s ease;\n\n    display: var(--display, none);\n    top: var(--top, unset);\n    left: var(--left, unset);\n    width: var(--width, unset);\n    height: var(--height, unset);\n    transform: var(--transform, unset);\n    max-width:50rem;\n    max-height: 50rem;\n\n\n    ","\n"])),(function(n){if("edit_note"===n.mode)return(0,S.iv)(c||(c=(0,j.Z)(["\n                textarea, input{\n                    width:100%;\n                    background-color: unset;\n                    &:focus{\n                        outline: none;\n                        background-color: inherit;\n                    }\n                }\n                input{\n                    text-align: center;\n                    /* font-weight: 600 !important; */\n                    color: var(--clr);\n                    border-bottom: 1px solid var(--border);\n                }\n                textarea{\n                    flex: 1;\n                    resize: none;\n                    font-weight: 500;\n                }\n                flex-direction:column;\n                position:absolute;\n                align-items:center;\n                background:var(--edit-modal-bg);\n                border-radius:0.5rem;\n            "])))})),cn=function(){var n=(0,l.useCallback)(function(){var n=(0,C.Z)(E().mark((function n(e){var t,r,i;return E().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=new Request("".concat("/api/user/notes/").concat(e)),n.next=4,fetch(t,{credentials:"include",body:JSON.stringify({BIN:!0}),method:"delete",headers:{"content-type":"application/json"}});case 4:return r=n.sent,n.next=7,r.json();case 7:return i=n.sent,n.next=10,i.success;case 10:return n.abrupt("return",n.sent);case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}(),[]),e=(0,l.useCallback)(function(){var n=(0,C.Z)(E().mark((function n(e){var t,r,i;return E().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=new Request("".concat("/api/user/notes/").concat(e._id)),n.next=4,fetch(t,{headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include",method:"PATCH"});case 4:return r=n.sent,n.next=7,r.json();case 7:return i=n.sent,n.next=10,i.success;case 10:return n.abrupt("return",n.sent);case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}(),[]);return{handleDeleteNote:n,handleUpdateNote:e}},un=function(n){var e=cn().handleDeleteNote,t=(0,d.I0)(),r=(0,l.useCallback)(function(){var r=(0,C.Z)(E().mark((function r(i){var o;return E().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i.preventDefault(),!i.target.classList.contains("note-delete-btn")){r.next=8;break}return o=i.target.parentElement.parentElement.id,r.next=6,e(o);case 6:r.sent&&(t((0,R.f_)(o)),n(!1));case 8:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),[]);return r},ln=function(n){var e=cn().handleUpdateNote,t=(0,d.I0)(),r=(0,l.useCallback)(function(){var r=(0,C.Z)(E().mark((function r(i){return E().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e(i);case 2:r.sent&&(n((function(n){return(0,q.Z)((0,q.Z)({},n),{},{_id:""})})),setTimeout((function(){return n({_id:"",title:"",body:"",bg:[""],delete:!1})}),500),t((0,R.Qk)(i)));case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),[]);return r},dn=function(n,e){return(0,l.useCallback)((function(t){if(t.target.classList.contains("note")|t.target.classList.contains("note-title")|t.target.classList.contains("note-body")){var r=t.target.parentElement.parentElement.id;e((function(n){return(0,q.Z)((0,q.Z)({},n),{},{_id:r})})),n(!0)}}),[])},mn=function(){var n,e,t;V();var r=M().search,i=(0,g.Z)().user,o=(0,N.Z)().theme,a=(0,J.Z)(),s=a.addNewState,c=a.setStates,d=a.states,m=(0,l.useState)(!1),f=(0,u.Z)(m,2),p=f[0],b=f[1],x=(0,l.useState)({_id:"",bg:[""],title:"",body:"",delete:!1}),w=(0,u.Z)(x,2),Z=w[0],k=w[1],j=(0,l.useCallback)((function(n){return void 0==r||(n.title.trim().toLowerCase().includes(r.toLowerCase())||n.body.trim().toLowerCase().includes(r.toLowerCase()))}),[r]),C=ln(k),_=dn(b,k),E=un(b);return U({element:document.querySelector(".notes-output-section"),handler:_,run:0!=(null===(n=i.notes)||void 0===n?void 0:n.length)}),(0,h.Z)({element:document,handler:function(){return C(Z)},run:!!Z._id}),U({run:0!=(null===(e=i.notes)||void 0===e?void 0:e.length),handler:E,element:document.querySelector(".notes-output-section")}),H({note_id:Z._id}),(0,l.useEffect)((function(){var n,e;(document.documentElement.classList.toggle("hide-overflow",p),Z._id&&!Z.title)&&(null===(e=i.notes)||void 0===e||e.forEach((function(n){n._id==Z._id&&(c({title:n.title,body:n.body}),k(n))})));if(!Z._id){n=setTimeout((function(){return b(!1)}),300)}return function(){return clearTimeout(n)}}),[Z,p,i.notes]),(0,l.useEffect)((function(){k((function(n){return(0,q.Z)((0,q.Z)({},n),d)}))}),[d]),(0,y.jsxs)(D.Z,{mode:"notes-output-section",children:[null===(t=i.notes)||void 0===t?void 0:t.map((function(n){return(0,y.jsx)(rn,{note:n,styles:{display:j(n)?"flex":"none",backgroundColor:o?n.bg[1]:n.bg[0]},isVisible:j(n)},n._id)})),(0,y.jsx)(v.Z,{condition:p,children:(0,y.jsxs)(an,{mode:"edit_note",bg:Z.bg,noteToBeEdited:Z,children:[(0,y.jsx)(O.Z,(0,q.Z)({},s({name:"title",placeholder:"update title",state:"title"}))),(0,y.jsx)(A.Z,(0,q.Z)({},s({name:"body",placeholder:"update body",state:"body"})))]})})]})},fn=(0,l.memo)(mn),hn=(0,l.lazy)((function(){return t.e(821).then(t.bind(t,2209))})),pn=(0,l.lazy)((function(){return t.e(125).then(t.bind(t,5913))})),vn=function(){var n=(0,p.Z)({width:700}),e=(0,u.Z)(n,1)[0],t=m(),r=t.color_menu,i=t.dispatch;return(0,h.Z)({element:document,handler:function(){return i((0,f.gD)())},run:r.enable}),(0,l.useEffect)((function(){return document.querySelector("header").style.borderBottom="1px solid var(--border)",function(){document.querySelector("header").style.borderBottom="0px"}}),[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(v.Z,{condition:e,children:(0,y.jsx)(k.Z,{Comp:function(){return(0,y.jsx)(hn,{})}})}),(0,y.jsx)(v.Z,{condition:!e,children:(0,y.jsx)(k.Z,{Comp:function(){return(0,y.jsx)(pn,{})}})}),(0,y.jsx)(fn,{}),(0,y.jsx)(v.Z,{condition:r.enable,children:(0,y.jsx)(I,{styles:r.position})})]})},bn=(0,l.memo)((function(){return(0,y.jsx)(Z,{children:(0,y.jsx)(vn,{})})}))},5789:function(n,e,t){var r=t(2791),i=t(6030);e.Z=function(){var n=(0,i.v9)((function(n){return n.theme.value})),e=(0,i.I0)();return(0,r.useEffect)((function(){document.body.classList.toggle("dark",n),localStorage.setItem("dark",JSON.stringify(n))}),[n]),{theme:n,dispatch:e}}},7572:function(n,e,t){var r=t(6030);e.Z=function(){return{user:(0,r.v9)((function(n){return n.user})),dispatch:(0,r.I0)()}}},6554:function(n,e,t){var r=t(2791);e.Z=function(n){var e=n.eventName,t=void 0===e?"click":e,i=n.eventName2,o=void 0===i?"keyup":i,a=n.element2,s=void 0===a?window:a,c=n.handler,u=n.element,l=void 0===u?window:u,d=n.run,m=(0,r.useRef)(c);(0,r.useEffect)((function(){m.current=c}),[c]),(0,r.useEffect)((function(){var n=function(n){"wrapper"==n.target.id&&m.current()},e=function(n){"Escape"===n.key&&m.current()};return d?(null===l||void 0===l||l.addEventListener(t,n,!1),null===s||void 0===s||s.addEventListener(o,e,!1)):(null===l||void 0===l||l.removeEventListener(t,n,!1),null===s||void 0===s||s.removeEventListener(o,e,!1)),function(){null===l||void 0===l||l.removeEventListener(t,n,!1),null===s||void 0===s||s.removeEventListener(o,e,!1)}}),[t,l,d])}},4955:function(n,e,t){var r=t(5861),i=t(885),o=t(7757),a=t.n(o),s=t(2791),c=t(6030),u=t(5501);e.Z=function(n){var e=n.shouldCheckIfUserLogged,t=void 0===e||e,o=(0,c.I0)(),l=(0,s.useState)(!1),d=(0,i.Z)(l,2),m=d[0],f=d[1],h=new AbortController,p=new Request("/api/user/"),v=(0,s.useMemo)((function(){return new Request(p,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include",signal:h.signal})}),[]);return(0,s.useEffect)((function(){t&&(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(v);case 2:return e=n.sent,n.next=5,e.json();case 5:"email"in(t=n.sent)&&o((0,u.R9)(t.email)),t.email||f(!0);case 8:case"end":return n.stop()}}),n)})))()}),[]),[m]}},9753:function(n,e,t){t.d(e,{Z:function(){return S}});var r,i,o,a,s,c=t(4942),u=t(1413),l=t(5861),d=t(885),m=t(7757),f=t.n(m),h=t(2791),p=t(168),v=t(5751),b=t(184),g=(0,h.memo)((function(n){var e=n.children,t=n.mode,r=n.onSubmit,i=n.styles,o=n.animate;return(0,b.jsx)(y,{onSubmit:r&&r,style:i,mode:t,animate:o,children:e})})),x=(0,h.memo)(g),y=v.ZP.form(r||(r=(0,p.Z)(["\n    height:45rem;\n    --form-width: 100%;\n    width:var(--form-width);\n    display:flex;\n    align-items:center;\n    flex-direction:column;\n    /* max-width:35rem; */\n    background:var(--form-bg);\n    border-radius: 0.5rem;\n    box-shadow: var(--form-shadow);\n    margin-inline: auto;\n\n\n    ","\n    ","\n    button{\n        margin-top: auto;   //button will be at the bottom of the form\n        margin-bottom: 2rem;\n    }\n\n    /* animate flag */\n    ","\n\n    @keyframes animate_form{\n        0%{\n            opacity:0;\n            transform:translateX(-100%);\n        }\n        50%{\n            transform:translateX(50%);\n        }\n    }\n\n"])),(function(n){var e=n.mode;return"login"===e||"register"===e?(0,v.iv)(i||(i=(0,p.Z)(["\n                border-radius:0.5rem;\n                padding-inline:2rem;\n                /* padding-block-end:2rem; */\n                padding-block-start: 0;\n                box-shadow: none;\n\n                @media (min-width: 650px){\n                    max-width:40rem;\n                }\n\n            "]))):"create_note"===e?(0,v.iv)(o||(o=(0,p.Z)(["\n                height:25rem;\n                @media (min-width:700px){\n                    height:50rem;\n                }\n            "]))):void 0}),(function(n){if(!0===n.no_bg)return(0,v.iv)(a||(a=(0,p.Z)(["\n            background:inherit;\n        "])))}),(function(n){if(n.animate)return(0,v.iv)(s||(s=(0,p.Z)(["\n                animation:animate_form 0.4s ease-in forwards;\n            "])))})),w=t(5158),Z=function(n){return(0,b.jsx)("label",{className:n.focus?"transform":"",children:n.text})},k=(0,h.memo)(Z),j=t(5501),C=t(6030),_=function(){var n=(0,h.useState)(new AbortController),e=(0,d.Z)(n,1)[0],t=(0,h.useCallback)(function(){var n=(0,l.Z)(f().mark((function n(t){var r,i,o,a,s;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.url,i=t.method,o=t.body,a=new Request(r,{method:i,body:JSON.stringify(o),headers:{"content-type":"application/json"},credentials:"include",signal:e.signal}),n.prev=2,n.next=5,fetch(a);case 5:return s=n.sent,n.abrupt("return",s.json());case 9:return n.prev=9,n.t0=n.catch(2),n.abrupt("return",new Error("error occured",{cause:Error(n.t0)}));case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}(),[]);return{handleSubmit:t}},E=t(6871),S=function(){var n=(0,h.useState)({}),e=(0,d.Z)(n,2),t=e[0],r=e[1],i=(0,h.useState)(!1),o=(0,d.Z)(i,2),a=o[0],s=o[1],m=(0,h.useState)(Array()),p=(0,d.Z)(m,2),v=p[0],b=p[1],g=(0,h.useState)(""),y=(0,d.Z)(g,2),Z=y[0],S=y[1],L=(0,h.useState)(!1),N=(0,d.Z)(L,2),P=N[0],T=N[1],F=(0,C.I0)(),R=_().handleSubmit,z=(0,E.s0)(),I=(0,h.useCallback)(function(){var n=(0,l.Z)(f().mark((function n(e){var r,i,o,a;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.e,i=e.url,o=e.setIsDisabled,r.preventDefault(),n.prev=2,o(!0),s(!0),n.next=7,R({url:i,body:t,method:"POST"});case 7:(a=n.sent)._id&&!a.email&&z("/login"),a._id&&F((0,j.R9)(a.email)),"errors"in a&&b(a.errors),"error"in a&&S(a.error),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(2),b(Array(n.t0));case 17:return n.prev=17,o(!1),s(!1),n.finish(17);case 21:case"end":return n.stop()}}),n,null,[[2,14,17,21]])})));return function(e){return n.apply(this,arguments)}}(),[t]),B=(0,h.useCallback)((function(){return b([])}),[]),q=(0,h.useCallback)((function(){return S("")}),[]);(0,h.useEffect)((function(){var n;return 0!=v.length&&(n=setTimeout(B,4e3)),function(){return clearTimeout(n)}}),[v]),(0,h.useEffect)((function(){var n;return Z&&(n=setTimeout(q,4e3)),function(){return clearTimeout(n)}}),[Z]);var O=(0,h.useCallback)((function(n,e){r((function(t){return(0,u.Z)((0,u.Z)({},t),{},(0,c.Z)({},e,n))}))}),[t]);return{addNewState:(0,h.useCallback)((function(n){return(0,u.Z)({value:t[n.state]||"",onChange:function(e){return O(e.target.value,n.state)}},n)}),[t]),setStates:r,states:t,Form:x,FormGroup:w.Z,FormLabel:k,errors:v,loading:a,handleSubmit:I,disabled:P,setDisabled:T,error:Z,setLoading:s}}},3305:function(n,e,t){var r=t(885),i=t(2791);e.Z=function(n){var e=n.width,t=void 0===e?750:e,o=(0,i.useState)(window.innerWidth>t),a=(0,r.Z)(o,2),s=a[0],c=a[1],u=(0,i.useCallback)((function(){return c(window.innerWidth>t)}),[]);return(0,i.useEffect)((function(){return window.addEventListener("resize",u),function(){return window.removeEventListener("resize",u)}}),[]),[s]}},1442:function(n,e,t){var r=t(184);e.Z=function(n){var e=n.condition,t=n.children;return e?(0,r.jsx)(r.Fragment,{children:t}):null}},6862:function(n,e,t){var r,i=t(168),o=t(5751),a=t(184);e.Z=function(n){var e=n.children,t=n.style;return(0,a.jsx)(s,{role:"wrapper",id:"wrapper",style:t,children:e})};var s=o.ZP.div(r||(r=(0,i.Z)(["\n    position: fixed;\n    inset: 0;\n    height: 100%;\n    background-color: rgba(0,0,0,0.3);\n    z-index: 100;\n    transition: background 0.5s;\n"])))}}]);
//# sourceMappingURL=notePage.8951a931.chunk.js.map