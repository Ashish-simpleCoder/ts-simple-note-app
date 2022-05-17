"use strict";(self.webpackChunksimple_note=self.webpackChunksimple_note||[]).push([[33],{5158:function(n,e,t){var r,o=t(168),i=t(885),a=t(2791),s=t(5751),c=t(184),l=function(n){var e=n.children,t=n.styles,r=(0,a.useState)(!1),o=(0,i.Z)(r,2),s=o[0],l=o[1];return(0,c.jsx)(u,{style:t,children:a.Children.map(e,(function(n){return"string"==typeof n.type?n:(0,a.cloneElement)(n,{focus:s,setFocus:l})}))})};e.Z=(0,a.memo)(l);var u=s.ZP.div(r||(r=(0,o.Z)(["\n    display:flex;\n    align-items:center;\n    width:100%;\n    height: clamp(3.5rem ,3.8rem, 3.8vw);\n    position:relative;\n    margin-top:6rem;\n    background-color: var(--form-group-bg);\n    border-radius: 0.5rem;\n\n    div.utility.invalid, div.utility.focus-border{\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        pointer-events: none;\n        border-radius: 0.5rem;\n        border: 1px solid transparent;\n    }\n\n\n    /* giving margin on email form field */\n    &:nth-of-type(1){\n        margin-top:3rem;\n    }\n    div.svg-container{\n        height: 100%;\n        width: 4rem;\n        display: grid;\n        place-items: center;\n    }\n\n    label{\n        position:absolute;\n        transform: translateX(5rem);\n        pointer-events:none;\n        transition:transform 0.3s;\n    }\n    .transform{\n        transform:translate(1rem, -170%);\n    }\n\n\n    >input{\n        padding-inline-end: 1rem;\n        flex: 1;\n        height: 100%;\n        outline: none;\n        background-color: transparent !important;\n    }\n\n"])))},629:function(n,e,t){t.d(e,{Z:function(){return x}});var r,o,i,a,s,c,l,u=t(168),d=t(2791),m=t(5751),f=t(1442),h=t(184),p=function(n){var e=n.py,t=n.px,r=n.w,o=n.h;return(0,h.jsxs)(b,{py:e,px:t,w:r,h:o,children:[(0,h.jsx)("div",{className:"circle c1"}),(0,h.jsx)("div",{className:"circle c2"})]})},v=(0,d.memo)(p),b=m.ZP.div(r||(r=(0,u.Z)(["\n   height:100%;\n   position:relative;\n   display:flex;\n   align-items:center;\n   justify-content:center;\n   text-align:center;\n\n   .circle{\n      position:absolute;\n      width:",";\n      height:",";\n      border-radius:50%;\n      border:clamp(0.3rem, 0.5rem,0.5vw) solid transparent;\n      border-top-color:purple;\n      animation: animate_loaders 1s linear infinite;\n   }\n\n   .c2{\n      border-bottom-color: red;\n      border-top-color:transparent;\n   }\n\n\n   @keyframes animate_loaders{\n      0%{\n         border-width: clamp(0.3rem, 0.5rem, 0.5vw);\n         transform: rotate(0);\n      }50%{\n         border-width: clamp(0.1rem,0.2rem,0.2vw);\n         transform: rotate(180deg);\n      }100%{\n         border-width: clamp(0.3rem, 0.5rem, 0.5vw);\n         transform: rotate(360deg);\n      }\n   }\n"])),(function(n){return n.w?n.w:"2rem"}),(function(n){return n.h?n.h:"2rem"})),g=function(n){var e=n.children,t=n.cn,r=n.onClick,o=n.mode,i=n.isDisabled,a=n.loader,s=n.style;return(0,h.jsxs)(y,{className:t,onClick:r,mode:o,disabled:i,style:s,children:[(0,h.jsxs)(f.Z,{condition:a,children:[" ",(0,h.jsx)(v,{})," "]}),(0,h.jsxs)(f.Z,{condition:!a,children:[" ",e," "]})]})},x=(0,d.memo)(g),y=m.ZP.button(o||(o=(0,u.Z)(["\n    text-decoration: none;\n    padding: clamp(0.3rem, 0.4rem, 0.4vw) clamp(0.7rem, 0.9rem, 0.9vw);\n    display: grid;\n    place-items: center;\n\n    :disabled{\n        background-color: #424242;\n        cursor: not-allowed;\n        border: none;\n        /* color: ; */\n        color: #979797;\n        /* width: 100%; */\n    }\n\n\n    transition: background 0.3s;\n    background-color: var(--body-bg);   // for theme-toggling button\n    cursor: pointer;\n    border: none;\n\n\n\n    ","\n"])),(function(n){switch(n.mode){case"hero_btn":return(0,m.iv)(i||(i=(0,u.Z)(["\n                padding:1rem 3rem;\n                /* height:unset; */\n                display:flex;\n                /* align-items:center;    //making text vertically center */\n                margin-top:3rem;\n                background-color: var(--brand);\n                font-weight:600;\n                box-shadow:0 0.2rem 0.2rem rgba(0, 0, 0, 0.3);\n                color: white;\n                box-shadow: var(--btn-shadow);\n            "])));case"toggle-nav-btn":return(0,m.iv)(a||(a=(0,u.Z)(["\n                margin-inline-start: auto;\n                z-index: 6;\n            "])));case"create_note_btn":return(0,m.iv)(s||(s=(0,u.Z)(["\n                background:var(--success-400);\n                /* color:hsl(0, 0%, 90%); */\n                /* box-shadow:0 0.2rem 0.2rem rgba(0, 0, 0, 0.3); */\n            "])));case"logout_btn":return(0,m.iv)(c||(c=(0,u.Z)(["\n                height:unset;\n            "])));case"login_form_btn":return(0,m.iv)(l||(l=(0,u.Z)(["\n                width:100%;\n                position: relative;\n                z-index: 2;\n                background-color: green;\n                color: white;\n                border: none;\n                height: 4rem;\n                /* &:before{\n                    content: '';\n                    position:absolute;\n                    left: 0;\n                    top: 0;\n                    height: 100%;\n                    width: 0px;\n                    transition: all 0.3s;\n                }\n                &:hover{\n                    color: white;\n                }\n                &:hover::before{\n                    width: 100%;\n                    background-color: var(--brand);\n                    z-index: -1;\n                } */\n            "])))}}))},8189:function(n,e,t){var r,o,i=t(168),a=t(1413),s=t(2791),c=t(5751),l=t(184),u=function(n){var e=(0,s.useCallback)((function(){n.setFocus&&n.setFocus(!0)}),[n.setFocus]),t=(0,s.useCallback)((function(e){n.setFocus&&n.setFocus(e.target.value.length>0)}),[n.setFocus]);return(0,l.jsx)(d,(0,a.Z)((0,a.Z)({},n),{},{onFocus:e,onBlur:t}))};e.Z=(0,s.memo)(u);var d=c.ZP.input(r||(r=(0,i.Z)(["\n    height: clamp(3.5rem, 3.5rem, 3.5vw);\n    padding-inline: 1rem;\n\n\n    &:focus + div.utility.focus-border{\n        /* background-color: var(--input-focus-bg); */\n        outline: 1px solid var(--outline);\n    }\n\n    /* "," */\n\n\n    /* &:invalid + div.invalid{\n        border-color: var(--dan-200);\n    }\n\n\n    &:valid + div.invalid{\n        border-color: var(--success-300);\n    } */\n"])),(function(n){if("search_bar"==n.mode)return(0,c.iv)(o||(o=(0,i.Z)(["\n            /* height: inherit; */\n            "])))}))},5042:function(n,e,t){var r,o=t(168),i=t(1413),a=t(2791),s=t(5751),c=t(184),l=function(n){var e=(0,a.useCallback)((function(){n.setFocus&&n.setFocus(!0)}),[n.setFocus]),t=(0,a.useCallback)((function(e){n.setFocus&&n.setFocus(e.target.value.length>0)}),[n.setFocus]);return(0,c.jsx)(u,(0,i.Z)((0,i.Z)({},n),{},{onFocus:e,onBlur:t}))};e.Z=(0,a.memo)(l);var u=s.ZP.textarea(r||(r=(0,o.Z)(["\n    font-size: 1.6rem;\n    padding-inline: 1rem;\n    background: var(--input-bg);\n    border: none;\n    border-radius: 0.5rem;\n\n    &:focus{\n        /* background-color: var(--input-focus-bg); */\n    }\n\n    /* &:invalid + div.invalid{\n        border-color: var(--dan-200);\n    }\n\n\n    &:valid + div.invalid{\n        border-color: var(--success-300);\n    } */\n"])))},8901:function(n,e,t){var r,o,i,a,s,c,l,u=t(168),d=t(2791),m=t(5751),f=t(184),h=(0,d.memo)((function(n){var e=n.children,t=n.styles,r=n.mode,o=n.cn;return(0,f.jsx)(p,{mode:r,style:t,className:(r||"")+" "+(o||""),children:e})}));e.Z=(0,d.memo)(h);var p=m.ZP.section(r||(r=(0,u.Z)(["\n    display:flex;\n    overflow:hidden;\n    position:relative;\n    padding:2rem;\n    --width: 30rem;\n\n    ","\n\n    img{\n        display:flex;\n        width:clamp(23rem, 28rem, 28vw);\n        height:clamp(28rem, 32rem, 32vw);\n        transform:rotate(-20deg) scale(0.8);\n        transform-origin:center;\n    }\n"])),(function(n){switch(n.mode){case"create_note_container":return(0,m.iv)(o||(o=(0,u.Z)(["\n                flex-direction: column;\n                margin-bottom:3rem;\n                input{\n                    margin-block-end: 2rem;\n                }\n                textarea{\n                    height: 60%;\n                    resize: none;\n                    margin-block-end: 3rem;\n                    @media (max-width: 700px){\n                        height: 15rem;\n                    }\n                }\n\n                @media (min-width:700px){\n                    height:100%;\n                    position:fixed;\n                    border-right: 1px solid var(--brand-border-200);\n                }\n            "])));case"sign_form_container":return(0,m.iv)(i||(i=(0,u.Z)(["\n                background-color: var(--form-bg);\n                box-shadow: var(--form-shadow);\n                border-radius: 0.5rem;\n                transform: translateY(3rem);\n\n                @media (max-width: 700px){\n                    form{\n                        padding-inline: unset;\n                    }\n                }\n\n\n                @media (min-width: 700px){\n                    display: flex;\n                    max-width: 70rem;\n                    padding-inline: 2rem;\n                    margin-inline: auto;\n                }\n            "])));case"notes-output-section":return(0,m.iv)(a||(a=(0,u.Z)(["\n                gap: 2rem;\n                flex-wrap: wrap;\n\n                @media (min-width:700px){\n                    position:relative;\n                    left:var(--width);\n                    width:calc(100% - var(--width));\n                    justify-content: space-around;\n                }\n            "])));case"notes_container":return(0,m.iv)(s||(s=(0,u.Z)(["\n                justify-content:center;\n                gap:3rem;\n                padding:2rem;\n                flex-wrap:wrap;\n                @media (min-width:700px){\n                    justify-content:space-around;\n                }\n            "])));case"edit_note":return(0,m.iv)(c||(c=(0,u.Z)(["\n                position:fixed;\n                inset:0;\n                background: rgba(0,0,0, 0.5);\n            "])));default:return(0,m.iv)(l||(l=(0,u.Z)(["\n            "])))}}))},8818:function(n,e,t){t.r(e),t.d(e,{default:function(){return vn}});var r,o,i,a,s,c,l=t(885),u=t(2791),d=t(6030),m=function(){return{color_menu:(0,d.v9)((function(n){return n.color_menu})),dispatch:(0,d.I0)()}},f=t(5120),h=t(6554),p=t(3305),v=t(1442),b=t(6871),g=t(7572),x=t(4955),y=t(184),w=function(n){var e=(0,b.s0)(),t=(0,g.Z)().user,r=(0,u.useMemo)((function(){return!t.email}),[t.email]),o=(0,x.Z)({shouldCheckIfUserLogged:r}),i=(0,l.Z)(o,1)[0],a=(0,u.useCallback)((function(){return e("/login")}),[]);return(0,u.useEffect)((function(){i&&a()}),[i]),(0,y.jsx)(y.Fragment,{children:n.children})},Z=(0,u.memo)(w),k=t(4866),j=t(168),C=t(5861),_=t(7757),S=t.n(_),E=t(5751),T=[{white:["#fff","#000"]},{green:["hsl(146, 85%, 75%)","hsl(146, 85%, 15%)"]},{yellow:["hsl(58, 85%, 75%)","hsl(58, 85%, 15%)"]},{purple:["hsl(276, 85%, 75%)","hsl(276, 85%, 15%)"]},{red:["hsl(348, 85%, 75%)","hsl(348, 85%, 15%)"]}],P=t(5789),N=function(n){var e=n.clr,t=n.handleClick,r=(0,P.Z)().theme,o=e[Object.keys(e)[0]][r?1:0],i=(0,u.useCallback)((function(n){return t(n,o,e)}),[e,o,t]);return(0,y.jsx)("div",{style:{background:o,width:"3rem",height:"3rem",borderRadius:"50%"},onClick:i})},F=(0,u.memo)(N),L=t(6862),R=t(5501),B=function(n){var e=n.styles,t=((0,g.Z)().user,m()),r=t.color_menu,o=t.dispatch,i=(0,u.useCallback)(function(){var n=(0,C.Z)(S().mark((function n(e,t,i){var a,s;return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.stopPropagation(),null!==r&&void 0!==r&&r.item){n.next=3;break}return n.abrupt("return");case 3:if(!r.item.bg.includes(t)){n.next=5;break}return n.abrupt("return");case 5:return a=new Request("/api/user/note/color/"),n.next=8,fetch("".concat(a).concat(r.item._id),{credentials:"include",method:"PATCH",body:JSON.stringify({bg:i[Object.keys(i)[0]]}),headers:{"Content-Type":"application/json"}});case 8:return s=n.sent,n.next=11,s.json();case 11:n.sent.success&&(o((0,R.TZ)({bg:i[Object.keys(i)[0]],_id:r.item._id})),o((0,f.e_)(i[Object.keys(i)[0]])));case 13:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),[r]);return(0,y.jsx)(L.Z,{children:(0,y.jsx)(I,{className:"clr-list",style:e,children:T.map((function(n,e){return(0,y.jsx)(F,{clr:n,handleClick:i},e)}))})})},z=(0,u.memo)(B),I=E.ZP.div(r||(r=(0,j.Z)(["\n   display:flex;\n   position:fixed;\n   flex-direction:row;\n   align-items:center;\n   justify-content:space-between;\n   gap:1rem;\n   z-index:3;\n   >div{\n      cursor:pointer;\n   }\n"]))),q=t(1413),O=t(8189),A=t(5042),D=t(8901),M=function(){return{search:(0,d.v9)((function(n){return n.search.value})),dispatch:(0,d.I0)()}},U=t(4990),J=function(n){var e=n.eventName,t=void 0===e?"click":e,r=n.handler,o=n.element,i=void 0===o?window:o,a=n.run,s=void 0!==a&&a,c=(0,u.useRef)(r);(0,u.useEffect)((function(){c.current=r}),[r]),(0,u.useEffect)((function(){var n=function(n){r(n)};return s?null===i||void 0===i||i.addEventListener(t,n,!1):null===i||void 0===i||i.removeEventListener(t,n,!1),function(){null===i||void 0===i||i.removeEventListener(t,n,!1)}}),[t,i,s])},V=function(){var n=(0,g.Z)().dispatch,e=(0,u.useCallback)((0,C.Z)(S().mark((function e(){var t,r,o;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Request("/api/user/notes"),e.next=3,fetch(t,{method:"get",credentials:"include",headers:{"Content-Type":"application/json"}});case 3:return r=e.sent,e.next=6,r.json();case 6:(o=e.sent).notes&&n((0,R.U3)(o.notes));case 8:case"end":return e.stop()}}),e)}))),[]);(0,u.useEffect)((function(){e()}),[])},H=function(n){var e=n.note_id,t=(0,u.useRef)(e),r=(0,u.useRef)(),o=(0,u.useRef)();(0,u.useEffect)((function(){t.current=e}),[e]);var i=(0,u.useCallback)((function(n){var e=document.getElementById("modal"),t=document.getElementById(n);r.current=e,r.current.id=n,o.current=t,t.style.opacity="0";var i=t.getBoundingClientRect(),a=i.top,s=i.left,c=i.width,l=i.height;e.style.setProperty("--top",a+"px"),e.style.setProperty("--left",s+"px"),e.style.setProperty("--width",c+"px"),e.style.setProperty("--height",l+"px"),e.style.setProperty("--display","flex"),setTimeout((function(){document.body.classList.add("relative"),e.classList.add("expand-to-center")}),100)}),[]),a=(0,u.useCallback)((function(){var n;document.body.classList.remove("relative"),null===(n=r.current)||void 0===n||n.classList.remove("expand-to-center"),setTimeout((function(){o.current&&(o.current.style.opacity="1")}),250)}),[]);(0,u.useEffect)((function(){e&&setTimeout((function(){return i(t.current)})),!e&&setTimeout((function(){return a()}))}),[e,i])},X=t(3540),G=t(629),Q=(0,u.memo)((function(n){var e=n.children,t=n.styles,r=n.handleClick,o=n.cn;return(0,y.jsx)(Y,{style:t,onClick:r,className:o,children:e})})),Y=E.ZP.h4(o||(o=(0,j.Z)(["\n    font-size:1.6rem;\n"]))),K=function(n){var e=n.children,t=n.cn;return(0,y.jsx)(W,{className:t,children:e})},W=E.ZP.p(i||(i=(0,j.Z)(["\n    margin: 0;\n    font-weight: 500;\n"]))),$=t(2041),nn=function(){var n=(0,P.Z)().theme;return(0,y.jsx)("div",{children:(0,y.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:n?"hsl(0, 0%, 80%)":"hsl(0, 0%, 10%)",children:[(0,y.jsx)("path",{d:"M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"}),(0,y.jsx)("circle",{cx:"6.5",cy:"11.5",r:"1.5"}),(0,y.jsx)("circle",{cx:"9.5",cy:"7.5",r:"1.5"}),(0,y.jsx)("circle",{cx:"14.5",cy:"7.5",r:"1.5"}),(0,y.jsx)("circle",{cx:"17.5",cy:"11.5",r:"1.5"})]})})},en=(0,u.lazy)((function(){return t.e(537).then(t.bind(t,518))})),tn=(0,u.memo)((function(n){var e=n.note,t=n.styles,r=n.mode,o=void 0===r?"note-page":r,i=m(),a=i.color_menu,s=i.dispatch,c=(0,p.Z)({width:750}),d=(0,l.Z)(c,1)[0],h=(0,u.useState)(!1),b=(0,l.Z)(h,2),g=b[0],x=b[1],w=(0,u.useCallback)((function(){return d&&x(!0)}),[d]),Z=(0,u.useCallback)((function(){return d&&x(!1)}),[d]),j=(0,u.useCallback)((function(n){var t=n.currentTarget.getBoundingClientRect(),r=t.top,o=t.left;s((0,f.BM)({enable:!a.enable,item:{_id:e._id,bg:e.bg},position:{top:r+20+"px",left:o+20+"px"}}))}),[]),C=(0,u.useState)({title:"",body:""}),_=(0,l.Z)(C,2),S=_[0],E=_[1],T=M().search,P=(0,u.useState)(n.isVisible&&void 0!=T),N=(0,l.Z)(P,2),F=N[0],L=N[1];return(0,u.useEffect)((function(){if(void 0!=T&&n.isVisible){L(!0);var t={title:"".concat(e.title.replace(T,'<mark style="color: black">'.concat(T,"</mark>"))),body:"".concat(e.body.replace(T,'<mark style="color: black;">'.concat(T,"</mark>")))};E(t)}else E({title:"",body:""}),L(!1)}),[n.isVisible,T]),(0,y.jsxs)(rn,{id:e._id,style:t,className:"note",onMouseEnter:w,onMouseLeave:Z,children:[(0,y.jsxs)(D.Z,{styles:{padding:"0.5rem 1rem",borderBottom:"1px solid var(--border)"},children:[(0,y.jsx)($.Z,{cn:"random-span",bg:!0}),(0,y.jsxs)(Q,{styles:{width:"100%",margin:0,textAlign:"center"},cn:"note-title",children:[(0,y.jsx)(v.Z,{condition:!F,children:e.title}),(0,y.jsx)(v.Z,{condition:F,children:(0,X.ZP)(S.title)})]})]}),(0,y.jsx)(D.Z,{styles:{overflow:"hidden",flex:"1",padding:"0.5rem 1rem"},children:(0,y.jsxs)(K,{cn:"note-body",children:[(0,y.jsx)(v.Z,{condition:!F,children:e.body}),(0,y.jsx)(v.Z,{condition:F,children:(0,X.ZP)(S.body)})]})}),(0,y.jsx)(v.Z,{condition:!d||g,children:(0,y.jsx)(k.Z,{Comp:function(){return(0,y.jsx)(en,{cn:"note-overlay ".concat("recycle-page"==o?"recycle-overlay":""),children:(0,y.jsxs)(v.Z,{condition:"note-page"==o,children:[(0,y.jsx)(G.Z,{style:{backgroundColor:"transparent"},onClick:j,children:(0,y.jsx)(nn,{})}),(0,y.jsx)(G.Z,{mode:"delete_note_btn",cn:"note-delete-btn",children:"delete"})]})})}})})]})})),rn=E.ZP.div(a||(a=(0,j.Z)(["\n    position:relative;\n    width: 100%;\n    height:20rem;\n    box-shadow:0 0.2rem 0.2rem rgba(0,0,0,0.2);\n    border-radius:0 0.5rem 0.5rem 0;\n    display:flex;\n    --direction: column;\n    flex-direction: var(--direction);\n    --note-menu-opacity:0;\n    /* animation:animate_note calc(0.3s  * var(--note-order)) ease-in; */\n\n    @media (min-width:700px){\n        max-width:40rem;\n    }\n\n\n    p{\n        opacity:0.9;\n        white-space:pre-line;\n        word-break:break-all;\n        width:100%;\n    }\n\n    /* random span at the left top of the note */\n    span.random-span{\n        position:absolute;\n        top:0;left:0;\n        width:5rem;\n        height:5rem;\n        border-radius:50%;\n        transform:translate(-50%, -50%);\n    }\n\n   span{\n        pointer-events: none;\n    }\n\n    @media (max-width:700px){\n        .overlay-menu{\n            display:none;\n        }\n        /* for bin page */\n        .bin-note-menu{\n            display:flex;\n        }\n    }\n\n    /* making the permanent delete and restore btn visible in bin page for every note */\n    .bin-note-menu{\n        --note-menu-opacity:1;\n    }\n    @media (min-width:700px){\n        --note-menu-opacity:0;\n        transition:all 0.3s;\n\n        div.overlay-menu {\n            height:4rem;\n            width:100%;\n            display:flex;\n            opacity:var(--note-menu-opacity);\n            pointer-events:none;\n        }\n        &:hover{\n            --note-menu-opacity:1;\n            div.overlay-menu{\n                pointer-events:all;\n            }\n        }\n    }\n\n    @keyframes animate_note{\n        0%{\n            transform: scale(0.8);\n            animation-timing-function: ease;\n        }\n        30%{\n            animation-timing-function: ease-in;\n            opacity: 1;\n            transform: scale(1.1);\n        }\n        60%{\n            animation-timing-function: ease-in;\n            transform: scale(0.9);\n        }\n        100%{  }\n}\n"]))),on=(0,u.memo)((function(n){var e=n.children,t=n.mode,r=n.bg,o=(n.noteToBeEdited,(0,P.Z)()),i=o.theme;o.dispatch,m().color_menu;return(0,y.jsx)(L.Z,{children:(0,y.jsx)(an,{mode:t,id:"modal",className:"edit-modal",style:{background:i?r[1]:r[0],border:"var(--border)"},children:e})})})),an=E.ZP.form(s||(s=(0,j.Z)(["\n    transition:all 0.3s ease;\n\n    display: var(--display, none);\n    top: var(--top, unset);\n    left: var(--left, unset);\n    width: var(--width, unset);\n    height: var(--height, unset);\n    transform: var(--transform, unset);\n    max-width:50rem;\n    max-height: 50rem;\n\n\n    ","\n"])),(function(n){if("edit_note"===n.mode)return(0,E.iv)(c||(c=(0,j.Z)(["\n                textarea, input{\n                    width:100%;\n                    background-color: unset;\n                    &:focus{\n                        outline: none;\n                        background-color: inherit;\n                    }\n                }\n                input{\n                    text-align: center;\n                    /* font-weight: 600 !important; */\n                    color: var(--clr);\n                    border-bottom: 1px solid var(--border);\n                }\n                textarea{\n                    flex: 1;\n                    resize: none;\n                    font-weight: 500;\n                }\n                flex-direction:column;\n                position:absolute;\n                align-items:center;\n                background:var(--edit-modal-bg);\n                border-radius:0.5rem;\n            "])))})),sn=function(){var n=(0,u.useCallback)(function(){var n=(0,C.Z)(S().mark((function n(e){var t,r,o;return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=new Request("".concat("/api/user/notes/").concat(e)),n.next=4,fetch(t,{credentials:"include",body:JSON.stringify({BIN:!0}),method:"delete",headers:{"content-type":"application/json"}});case 4:return r=n.sent,n.next=7,r.json();case 7:return o=n.sent,n.next=10,o.success;case 10:return n.abrupt("return",n.sent);case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}(),[]),e=(0,u.useCallback)(function(){var n=(0,C.Z)(S().mark((function n(e){var t,r,o;return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=new Request("".concat("/api/user/notes/").concat(e._id)),n.next=4,fetch(t,{headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include",method:"PATCH"});case 4:return r=n.sent,n.next=7,r.json();case 7:return o=n.sent,n.next=10,o.success;case 10:return n.abrupt("return",n.sent);case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}(),[]);return{handleDeleteNote:n,handleUpdateNote:e}},cn=function(n){var e=sn().handleDeleteNote,t=(0,d.I0)(),r=(0,u.useCallback)(function(){var r=(0,C.Z)(S().mark((function r(o){var i;return S().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o.preventDefault(),!o.target.classList.contains("note-delete-btn")){r.next=8;break}return i=o.target.parentElement.parentElement.id,r.next=6,e(i);case 6:r.sent&&(t((0,R.f_)(i)),n(!1));case 8:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),[]);return r},ln=function(n){var e=sn().handleUpdateNote,t=(0,d.I0)(),r=(0,u.useCallback)(function(){var r=(0,C.Z)(S().mark((function r(o){return S().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e(o);case 2:r.sent&&(n((function(n){return(0,q.Z)((0,q.Z)({},n),{},{_id:""})})),setTimeout((function(){return n({_id:"",title:"",body:"",bg:[""],delete:!1})}),500),t((0,R.Qk)(o)));case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),[]);return r},un=function(n,e){return(0,u.useCallback)((function(t){if(t.target.classList.contains("note")|t.target.classList.contains("note-title")|t.target.classList.contains("note-body")){var r=t.target.parentElement.parentElement.id;e((function(n){return(0,q.Z)((0,q.Z)({},n),{},{_id:r})})),n(!0)}}),[])},dn=function(){var n,e,t;V();var r=M().search,o=(0,g.Z)().user,i=(0,P.Z)().theme,a=(0,U.Z)(),s=a.addNewState,c=a.setStates,d=a.states,m=(0,u.useState)(!1),f=(0,l.Z)(m,2),p=f[0],b=f[1],x=(0,u.useState)({_id:"",bg:[""],title:"",body:"",delete:!1}),w=(0,l.Z)(x,2),Z=w[0],k=w[1],j=(0,u.useCallback)((function(n){return void 0==r||(n.title.trim().toLowerCase().includes(r.toLowerCase())||n.body.trim().toLowerCase().includes(r.toLowerCase()))}),[r]),C=ln(k),_=un(b,k),S=cn(b);return J({element:document.querySelector(".notes-output-section"),handler:_,run:0!=(null===(n=o.notes)||void 0===n?void 0:n.length)}),(0,h.Z)({element:document,handler:function(){return C(Z)},run:!!Z._id}),J({run:0!=(null===(e=o.notes)||void 0===e?void 0:e.length),handler:S,element:document.querySelector(".notes-output-section")}),H({note_id:Z._id}),(0,u.useEffect)((function(){var n,e;(document.documentElement.classList.toggle("hide-overflow",p),Z._id&&!Z.title)&&(null===(e=o.notes)||void 0===e||e.forEach((function(n){n._id==Z._id&&(c({title:n.title,body:n.body}),k(n))})));if(!Z._id){n=setTimeout((function(){return b(!1)}),300)}return function(){return clearTimeout(n)}}),[Z,p,o.notes]),(0,u.useEffect)((function(){k((function(n){return(0,q.Z)((0,q.Z)({},n),d)}))}),[d]),(0,y.jsxs)(D.Z,{mode:"notes-output-section",children:[null===(t=o.notes)||void 0===t?void 0:t.map((function(n){return(0,y.jsx)(tn,{note:n,styles:{display:j(n)?"flex":"none",backgroundColor:i?n.bg[1]:n.bg[0]},isVisible:j(n)},n._id)})),(0,y.jsx)(v.Z,{condition:p,children:(0,y.jsxs)(on,{mode:"edit_note",bg:Z.bg,noteToBeEdited:Z,children:[(0,y.jsx)(O.Z,(0,q.Z)({},s({name:"title",placeholder:"update title",state:"title"}))),(0,y.jsx)(A.Z,(0,q.Z)({},s({name:"body",placeholder:"update body",state:"body"})))]})})]})},mn=(0,u.memo)(dn),fn=(0,u.lazy)((function(){return t.e(821).then(t.bind(t,2209))})),hn=(0,u.lazy)((function(){return t.e(125).then(t.bind(t,5913))})),pn=function(){var n=(0,p.Z)({width:700}),e=(0,l.Z)(n,1)[0],t=m(),r=t.color_menu,o=t.dispatch;return(0,h.Z)({element:document,handler:function(){return o((0,f.gD)())},run:r.enable}),(0,u.useEffect)((function(){return document.querySelector("header").style.borderBottom="1px solid var(--border)",function(){document.querySelector("header").style.borderBottom="0px"}}),[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(v.Z,{condition:e,children:(0,y.jsx)(k.Z,{Comp:function(){return(0,y.jsx)(fn,{})}})}),(0,y.jsx)(v.Z,{condition:!e,children:(0,y.jsx)(k.Z,{Comp:function(){return(0,y.jsx)(hn,{})}})}),(0,y.jsx)(mn,{}),(0,y.jsx)(v.Z,{condition:r.enable,children:(0,y.jsx)(z,{styles:r.position})})]})},vn=(0,u.memo)((function(){return(0,y.jsx)(Z,{children:(0,y.jsx)(pn,{})})}))},4955:function(n,e,t){var r=t(5861),o=t(885),i=t(7757),a=t.n(i),s=t(2791),c=t(6030),l=t(5501);e.Z=function(n){var e=n.shouldCheckIfUserLogged,t=void 0===e||e,i=(0,c.I0)(),u=(0,s.useState)(!1),d=(0,o.Z)(u,2),m=d[0],f=d[1],h=new AbortController,p=new Request("/api/user/"),v=(0,s.useMemo)((function(){return new Request(p,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include",signal:h.signal})}),[]);return(0,s.useEffect)((function(){t&&(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(v);case 2:return e=n.sent,n.next=5,e.json();case 5:"email"in(t=n.sent)&&i((0,l.R9)(t.email)),t.email||f(!0);case 8:case"end":return n.stop()}}),n)})))()}),[]),[m]}},4990:function(n,e,t){t.d(e,{Z:function(){return _}});var r,o,i,a,s,c=t(4942),l=t(1413),u=t(5861),d=t(885),m=t(7757),f=t.n(m),h=t(2791),p=t(168),v=t(5751),b=t(184),g=(0,h.memo)((function(n){var e=n.children,t=n.mode,r=n.onSubmit,o=n.styles,i=n.animate;return(0,b.jsx)(y,{onSubmit:r&&r,style:o,mode:t,animate:i,children:e})})),x=(0,h.memo)(g),y=v.ZP.form(r||(r=(0,p.Z)(["\n    height:45rem;\n    --form-width: 100%;\n    width:var(--form-width);\n    display:flex;\n    align-items:center;\n    flex-direction:column;\n    /* max-width:35rem; */\n    background:var(--form-bg);\n    border-radius: 0.5rem;\n    box-shadow: var(--form-shadow);\n    margin-inline: auto;\n\n\n    ","\n    ","\n    button{\n        margin-top: auto;   //button will be at the bottom of the form\n        margin-bottom: 2rem;\n    }\n\n    /* animate flag */\n    ","\n\n    @keyframes animate_form{\n        0%{\n            opacity:0;\n            transform:translateX(-100%);\n        }\n        50%{\n            transform:translateX(50%);\n        }\n    }\n\n"])),(function(n){var e=n.mode;return"login"===e||"register"===e?(0,v.iv)(o||(o=(0,p.Z)(["\n                border-radius:0.5rem;\n                padding-inline:2rem;\n                /* padding-block-end:2rem; */\n                padding-block-start: 0;\n                box-shadow: none;\n\n                @media (min-width: 650px){\n                    max-width:40rem;\n                }\n\n            "]))):"create_note"===e?(0,v.iv)(i||(i=(0,p.Z)(["\n                height:25rem;\n                @media (min-width:700px){\n                    height:50rem;\n                }\n            "]))):void 0}),(function(n){if(!0===n.no_bg)return(0,v.iv)(a||(a=(0,p.Z)(["\n            background:inherit;\n        "])))}),(function(n){if(n.animate)return(0,v.iv)(s||(s=(0,p.Z)(["\n                animation:animate_form 0.4s ease-in forwards;\n            "])))})),w=t(5158),Z=function(n){return(0,b.jsx)("label",{className:n.focus?"transform":"",children:n.text})},k=(0,h.memo)(Z),j=t(5501),C=t(6030),_=function(){var n=(0,h.useState)({}),e=(0,d.Z)(n,2),t=e[0],r=e[1],o=(0,h.useState)(!1),i=(0,d.Z)(o,2),a=i[0],s=i[1],m=(0,h.useState)(Array()),p=(0,d.Z)(m,2),v=p[0],b=p[1],g=(0,h.useState)(""),y=(0,d.Z)(g,2),Z=y[0],_=y[1],S=(0,h.useState)(!1),E=(0,d.Z)(S,2),T=E[0],P=E[1],N=(0,h.useState)(new AbortController),F=(0,d.Z)(N,1)[0],L=(0,C.I0)(),R=(0,h.useCallback)(function(){var n=(0,u.Z)(f().mark((function n(e,r,o){var i,a;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(r),e.preventDefault(),n.prev=2,o(!0),s(!0),n.next=7,fetch(r,{signal:F.signal,body:JSON.stringify(t),method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}});case 7:return i=n.sent,n.next=10,i.json();case 10:(a=n.sent)._id&&L((0,j.R9)(a.email)),"errors"in a&&b(a.errors),"error"in a&&_(a.error),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(2),b(Array(n.t0));case 19:return n.prev=19,o(!1),s(!1),n.finish(19);case 23:case"end":return n.stop()}}),n,null,[[2,16,19,23]])})));return function(e,t,r){return n.apply(this,arguments)}}(),[t]),B=(0,h.useCallback)((function(){return b([])}),[]),z=(0,h.useCallback)((function(){return _("")}),[]);(0,h.useEffect)((function(){var n;return 0!=v.length&&(n=setTimeout((function(){return B()}),4e3)),function(){return clearTimeout(n)}}),[v]),(0,h.useEffect)((function(){var n;return Z&&(n=setTimeout((function(){return z()}),4e3)),function(){return clearTimeout(n)}}),[Z]);var I=(0,h.useCallback)((function(n,e){r((function(t){return(0,l.Z)((0,l.Z)({},t),{},(0,c.Z)({},e,n))}))}),[t]);return{addNewState:(0,h.useCallback)((function(n){var e=n.state,r=n.placeholder,o=n.name,i=n.id,a=n.type;return{value:t[e]||"",onChange:function(n){return I(n.target.value,e)},placeholder:r,name:o,id:i,type:a}}),[t]),setStates:r,states:t,Form:x,FormGroup:w.Z,FormLabel:k,errors:v,loading:a,handleSubmit:R,disabled:T,setDisabled:P,error:Z}}}}]);
//# sourceMappingURL=notePage.72f2ca05.chunk.js.map