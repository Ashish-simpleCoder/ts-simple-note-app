"use strict";(self.webpackChunksimple_note=self.webpackChunksimple_note||[]).push([[844],{7351:function(n,e,r){r.r(e);var t=r(885),o=r(2791),i=r(6416),a=r(6554),c=r(1442),s=r(6862),l=r(4866),d=r(629),u=r(184),m=(0,o.lazy)((function(){return Promise.all([r.e(105),r.e(660)]).then(r.bind(r,5407))})),h=function(){var n=(0,o.useState)(!1),e=(0,t.Z)(n,2),r=e[0],h=e[1],g=(0,o.useCallback)((function(){return h(!0)}),[]),b=(0,o.useCallback)((function(){return h(!1)}),[]);return(0,a.Z)({element:document,handler:b,run:r}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{onClick:g,style:{marginInlineStart:"auto"},children:(0,u.jsx)(i.Z,{})}),(0,u.jsx)(c.Z,{condition:r,children:(0,u.jsx)(s.Z,{style:{display:"flex",justifyContent:"center"},children:(0,u.jsx)(l.Z,{Comp:function(){return(0,u.jsx)(m,{style:{margin:"unset",marginInline:"unset",marginBlockStart:"3rem"}})}})})})]})};e.default=(0,o.memo)(h)},629:function(n,e,r){r.d(e,{Z:function(){return x}});var t,o,i,a,c,s,l,d=r(168),u=r(2791),m=r(5751),h=r(1442),g=r(184),b=function(n){var e=n.py,r=n.px,t=n.w,o=n.h;return(0,g.jsxs)(p,{py:e,px:r,w:t,h:o,children:[(0,g.jsx)("div",{className:"circle c1"}),(0,g.jsx)("div",{className:"circle c2"})]})},f=(0,u.memo)(b),p=m.ZP.div(t||(t=(0,d.Z)(["\n   height:100%;\n   position:relative;\n   display:flex;\n   align-items:center;\n   justify-content:center;\n   text-align:center;\n\n   .circle{\n      position:absolute;\n      width:",";\n      height:",";\n      border-radius:50%;\n      border:clamp(0.3rem, 0.5rem,0.5vw) solid transparent;\n      border-top-color:purple;\n      animation: animate_loaders 1s linear infinite;\n   }\n\n   .c2{\n      border-bottom-color: red;\n      border-top-color:transparent;\n   }\n\n\n   @keyframes animate_loaders{\n      0%{\n         border-width: clamp(0.3rem, 0.5rem, 0.5vw);\n         transform: rotate(0);\n      }50%{\n         border-width: clamp(0.1rem,0.2rem,0.2vw);\n         transform: rotate(180deg);\n      }100%{\n         border-width: clamp(0.3rem, 0.5rem, 0.5vw);\n         transform: rotate(360deg);\n      }\n   }\n"])),(function(n){return n.w?n.w:"2rem"}),(function(n){return n.h?n.h:"2rem"})),v=function(n){var e=n.children,r=n.cn,t=n.onClick,o=n.mode,i=n.isDisabled,a=n.loader,c=n.style;return(0,g.jsxs)(w,{className:r,onClick:t,mode:o,disabled:i,style:c,children:[(0,g.jsxs)(h.Z,{condition:a,children:[" ",(0,g.jsx)(f,{})," "]}),(0,g.jsxs)(h.Z,{condition:!a&&n.redirect_text,children:[" ",n.redirect_text," "]}),(0,g.jsxs)(h.Z,{condition:!a,children:[" ",e," "]})]})},x=(0,u.memo)(v),w=m.ZP.button(o||(o=(0,d.Z)(["\n    text-decoration: none;\n    padding: clamp(0.3rem, 0.4rem, 0.4vw) clamp(0.7rem, 0.9rem, 0.9vw);\n    display: grid;\n    place-items: center;\n\n    :disabled{\n        background-color: #424242;\n        cursor: not-allowed;\n        border: none;\n        /* color: ; */\n        color: #979797;\n        /* width: 100%; */\n    }\n\n\n    transition: background 0.3s;\n    background-color: var(--body-bg);   // for theme-toggling button\n    cursor: pointer;\n    border: none;\n\n\n\n    ","\n"])),(function(n){switch(n.mode){case"hero_btn":return(0,m.iv)(i||(i=(0,d.Z)(["\n                padding:1rem 3rem;\n                /* height:unset; */\n                display:flex;\n                /* align-items:center;    //making text vertically center */\n                margin-top:3rem;\n                background-color: var(--brand);\n                font-weight:600;\n                box-shadow:0 0.2rem 0.2rem rgba(0, 0, 0, 0.3);\n                color: white;\n                box-shadow: var(--btn-shadow);\n            "])));case"toggle-nav-btn":return(0,m.iv)(a||(a=(0,d.Z)(["\n                margin-inline-start: auto;\n                z-index: 6;\n            "])));case"create_note_btn":return(0,m.iv)(c||(c=(0,d.Z)(["\n                background:var(--success-400);\n                /* color:hsl(0, 0%, 90%); */\n                /* box-shadow:0 0.2rem 0.2rem rgba(0, 0, 0, 0.3); */\n            "])));case"logout_btn":return(0,m.iv)(s||(s=(0,d.Z)(["\n                height:unset;\n            "])));case"login_form_btn":return(0,m.iv)(l||(l=(0,d.Z)(["\n                width:100%;\n                position: relative;\n                z-index: 2;\n                background-color: green;\n                color: white;\n                border: none;\n                height: 4rem;\n                /* &:before{\n                    content: '';\n                    position:absolute;\n                    left: 0;\n                    top: 0;\n                    height: 100%;\n                    width: 0px;\n                    transition: all 0.3s;\n                }\n                &:hover{\n                    color: white;\n                }\n                &:hover::before{\n                    width: 100%;\n                    background-color: var(--brand);\n                    z-index: -1;\n                } */\n            "])))}}))},5789:function(n,e,r){var t=r(2791),o=r(6030);e.Z=function(){var n=(0,o.v9)((function(n){return n.theme.value})),e=(0,o.I0)();return(0,t.useEffect)((function(){document.body.classList.toggle("dark",n),localStorage.setItem("dark",JSON.stringify(n))}),[n]),{theme:n,dispatch:e}}},6416:function(n,e,r){var t=r(2791),o=r(5789),i=r(184);e.Z=function(){var n=(0,o.Z)().theme,e=(0,t.useMemo)((function(){return n?"#8D63F1":"#3B0C9E"}),[n]);return(0,i.jsx)("div",{className:"svg-container",children:(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z",stroke:e,strokeOpacity:"0.7",strokeWidth:"2",strokeLinecap:"round"})})})}}}]);
//# sourceMappingURL=MiniSearchBar.53da568f.chunk.js.map