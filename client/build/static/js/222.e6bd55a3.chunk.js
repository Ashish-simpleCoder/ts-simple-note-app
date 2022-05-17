"use strict";(self.webpackChunksimple_note=self.webpackChunksimple_note||[]).push([[222],{5158:function(n,e,r){var t,o=r(168),i=r(885),a=r(2791),s=r(5751),c=r(184),l=function(n){var e=n.children,r=n.styles,t=(0,a.useState)(!1),o=(0,i.Z)(t,2),s=o[0],l=o[1];return(0,c.jsx)(u,{style:r,children:a.Children.map(e,(function(n){return"string"==typeof n.type?n:(0,a.cloneElement)(n,{focus:s,setFocus:l})}))})};e.Z=(0,a.memo)(l);var u=s.ZP.div(t||(t=(0,o.Z)(["\n    display:flex;\n    align-items:center;\n    width:100%;\n    height: clamp(3.5rem ,3.8rem, 3.8vw);\n    position:relative;\n    margin-top:6rem;\n    background-color: var(--form-group-bg);\n    border-radius: 0.5rem;\n\n    div.utility.invalid, div.utility.focus-border{\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        pointer-events: none;\n        border-radius: 0.5rem;\n        border: 1px solid transparent;\n    }\n\n\n    /* giving margin on email form field */\n    &:nth-of-type(1){\n        margin-top:3rem;\n    }\n    div.svg-container{\n        height: 100%;\n        width: 4rem;\n        display: grid;\n        place-items: center;\n    }\n\n    label{\n        position:absolute;\n        transform: translateX(5rem);\n        pointer-events:none;\n        transition:transform 0.3s;\n    }\n    .transform{\n        transform:translate(1rem, -170%);\n    }\n\n\n    >input{\n        padding-inline-end: 1rem;\n        flex: 1;\n        height: 100%;\n        outline: none;\n        background-color: transparent !important;\n    }\n\n"])))},629:function(n,e,r){r.d(e,{Z:function(){return w}});var t,o,i,a,s,c,l,u=r(168),d=r(2791),m=r(5751),f=r(1442),h=r(184),v=function(n){var e=n.py,r=n.px,t=n.w,o=n.h;return(0,h.jsxs)(p,{py:e,px:r,w:t,h:o,children:[(0,h.jsx)("div",{className:"circle c1"}),(0,h.jsx)("div",{className:"circle c2"})]})},g=(0,d.memo)(v),p=m.ZP.div(t||(t=(0,u.Z)(["\n   height:100%;\n   position:relative;\n   display:flex;\n   align-items:center;\n   justify-content:center;\n   text-align:center;\n\n   .circle{\n      position:absolute;\n      width:",";\n      height:",";\n      border-radius:50%;\n      border:clamp(0.3rem, 0.5rem,0.5vw) solid transparent;\n      border-top-color:purple;\n      animation: animate_loaders 1s linear infinite;\n   }\n\n   .c2{\n      border-bottom-color: red;\n      border-top-color:transparent;\n   }\n\n\n   @keyframes animate_loaders{\n      0%{\n         border-width: clamp(0.3rem, 0.5rem, 0.5vw);\n         transform: rotate(0);\n      }50%{\n         border-width: clamp(0.1rem,0.2rem,0.2vw);\n         transform: rotate(180deg);\n      }100%{\n         border-width: clamp(0.3rem, 0.5rem, 0.5vw);\n         transform: rotate(360deg);\n      }\n   }\n"])),(function(n){return n.w?n.w:"2rem"}),(function(n){return n.h?n.h:"2rem"})),b=function(n){var e=n.children,r=n.cn,t=n.onClick,o=n.mode,i=n.isDisabled,a=n.loader,s=n.style;return(0,h.jsxs)(Z,{className:r,onClick:t,mode:o,disabled:i,style:s,children:[(0,h.jsxs)(f.Z,{condition:a,children:[" ",(0,h.jsx)(g,{})," "]}),(0,h.jsxs)(f.Z,{condition:!a,children:[" ",e," "]})]})},w=(0,d.memo)(b),Z=m.ZP.button(o||(o=(0,u.Z)(["\n    text-decoration: none;\n    padding: clamp(0.3rem, 0.4rem, 0.4vw) clamp(0.7rem, 0.9rem, 0.9vw);\n    display: grid;\n    place-items: center;\n\n    :disabled{\n        background-color: #424242;\n        cursor: not-allowed;\n        border: none;\n        /* color: ; */\n        color: #979797;\n        /* width: 100%; */\n    }\n\n\n    transition: background 0.3s;\n    background-color: var(--body-bg);   // for theme-toggling button\n    cursor: pointer;\n    border: none;\n\n\n\n    ","\n"])),(function(n){switch(n.mode){case"hero_btn":return(0,m.iv)(i||(i=(0,u.Z)(["\n                padding:1rem 3rem;\n                /* height:unset; */\n                display:flex;\n                /* align-items:center;    //making text vertically center */\n                margin-top:3rem;\n                background-color: var(--brand);\n                font-weight:600;\n                box-shadow:0 0.2rem 0.2rem rgba(0, 0, 0, 0.3);\n                color: white;\n                box-shadow: var(--btn-shadow);\n            "])));case"toggle-nav-btn":return(0,m.iv)(a||(a=(0,u.Z)(["\n                margin-inline-start: auto;\n                z-index: 6;\n            "])));case"create_note_btn":return(0,m.iv)(s||(s=(0,u.Z)(["\n                background:var(--success-400);\n                /* color:hsl(0, 0%, 90%); */\n                /* box-shadow:0 0.2rem 0.2rem rgba(0, 0, 0, 0.3); */\n            "])));case"logout_btn":return(0,m.iv)(c||(c=(0,u.Z)(["\n                height:unset;\n            "])));case"login_form_btn":return(0,m.iv)(l||(l=(0,u.Z)(["\n                width:100%;\n                position: relative;\n                z-index: 2;\n                background-color: green;\n                color: white;\n                border: none;\n                height: 4rem;\n                /* &:before{\n                    content: '';\n                    position:absolute;\n                    left: 0;\n                    top: 0;\n                    height: 100%;\n                    width: 0px;\n                    transition: all 0.3s;\n                }\n                &:hover{\n                    color: white;\n                }\n                &:hover::before{\n                    width: 100%;\n                    background-color: var(--brand);\n                    z-index: -1;\n                } */\n            "])))}}))},8189:function(n,e,r){var t,o,i=r(168),a=r(1413),s=r(2791),c=r(5751),l=r(184),u=function(n){var e=(0,s.useCallback)((function(){n.setFocus&&n.setFocus(!0)}),[n.setFocus]),r=(0,s.useCallback)((function(e){n.setFocus&&n.setFocus(e.target.value.length>0)}),[n.setFocus]);return(0,l.jsx)(d,(0,a.Z)((0,a.Z)({},n),{},{onFocus:e,onBlur:r}))};e.Z=(0,s.memo)(u);var d=c.ZP.input(t||(t=(0,i.Z)(["\n    height: clamp(3.5rem, 3.5rem, 3.5vw);\n    padding-inline: 1rem;\n\n\n    &:focus + div.utility.focus-border{\n        /* background-color: var(--input-focus-bg); */\n        outline: 1px solid var(--outline);\n    }\n\n    /* "," */\n\n\n    /* &:invalid + div.invalid{\n        border-color: var(--dan-200);\n    }\n\n\n    &:valid + div.invalid{\n        border-color: var(--success-300);\n    } */\n"])),(function(n){if("search_bar"==n.mode)return(0,c.iv)(o||(o=(0,i.Z)(["\n            /* height: inherit; */\n            "])))}))},4060:function(n,e,r){var t=r(2791),o=r(6030),i=r(184),a=function(){var n=(0,o.v9)((function(n){return n.theme.value})),e=(0,t.useMemo)((function(){return n?"#8D63F1":"#3B0C9E"}),[n]);return(0,i.jsx)("div",{className:"svg-container",children:(0,i.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5ZM19.35 6L12 11.085L4.65 6H19.35ZM3 18V6.6825L11.5725 12.615C11.698 12.7021 11.8472 12.7488 12 12.7488C12.1528 12.7488 12.302 12.7021 12.4275 12.615L21 6.6825V18H3Z",fill:e})})})};e.Z=(0,t.memo)(a)},592:function(n,e,r){var t=r(2791),o=r(5789),i=r(184),a=function(){var n=(0,o.Z)().theme,e=(0,t.useMemo)((function(){return n?"#8D63F1":"#3B0C9E"}),[n]);return(0,i.jsx)("div",{className:"svg-container",children:(0,i.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M15.75 1.5C14.6959 1.49976 13.6565 1.74642 12.7149 2.22023C11.7734 2.69404 10.9559 3.38181 10.328 4.22844C9.7001 5.07506 9.27925 6.057 9.09917 7.09555C8.91909 8.13411 8.98479 9.20041 9.291 10.209L1.5 18V22.5H6L13.791 14.709C14.7194 14.9908 15.6977 15.0692 16.6591 14.9387C17.6206 14.8083 18.5426 14.4721 19.3624 13.953C20.1821 13.434 20.8804 12.7444 21.4095 11.9311C21.9386 11.1178 22.2862 10.2 22.4285 9.24025C22.5709 8.28049 22.5046 7.30132 22.2343 6.36948C21.964 5.43764 21.496 4.57502 20.8622 3.84042C20.2283 3.10582 19.4436 2.51649 18.5614 2.11261C17.6792 1.70872 16.7203 1.49978 15.75 1.5ZM15.75 13.5C15.2336 13.4997 14.7201 13.4234 14.226 13.2735L13.3657 13.0125L12.7305 13.6478L10.3448 16.0335L9.3105 15L8.25 16.0605L9.28425 17.0947L8.09475 18.2843L7.0605 17.25L6 18.3105L7.03425 19.3447L5.379 21H3V18.621L10.3515 11.2695L10.9875 10.6342L10.7265 9.774C10.4059 8.71724 10.4268 7.58631 10.786 6.54207C11.1453 5.49784 11.8247 4.59347 12.7275 3.95762C13.6304 3.32177 14.7108 2.98681 15.815 3.0004C16.9192 3.01398 17.9911 3.37542 18.878 4.03329C19.765 4.69116 20.4219 5.61197 20.7554 6.66473C21.0888 7.71749 21.0818 8.84859 20.7354 9.89714C20.3889 10.9457 19.7206 11.8583 18.8256 12.5051C17.9305 13.152 16.8543 13.5001 15.75 13.5Z",fill:e}),(0,i.jsx)("path",{d:"M16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z",fill:e})]})})};e.Z=(0,t.memo)(a)},4955:function(n,e,r){var t=r(5861),o=r(885),i=r(7757),a=r.n(i),s=r(2791),c=r(6030),l=r(5501);e.Z=function(n){var e=n.shouldCheckIfUserLogged,r=void 0===e||e,i=(0,c.I0)(),u=(0,s.useState)(!1),d=(0,o.Z)(u,2),m=d[0],f=d[1],h=new AbortController,v=(0,s.useMemo)((function(){return new Request("http://localhost:5000/api/user",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include",signal:h.signal})}),[]);return(0,s.useEffect)((function(){r&&(0,t.Z)(a().mark((function n(){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(v);case 2:return e=n.sent,n.next=5,e.json();case 5:"email"in(r=n.sent)&&i((0,l.R9)(r.email)),r.email||f(!0);case 8:case"end":return n.stop()}}),n)})))()}),[]),[m]}},4990:function(n,e,r){r.d(e,{Z:function(){return L}});var t,o,i,a,s,c=r(4942),l=r(1413),u=r(5861),d=r(885),m=r(7757),f=r.n(m),h=r(2791),v=r(168),g=r(5751),p=r(184),b=(0,h.memo)((function(n){var e=n.children,r=n.mode,t=n.onSubmit,o=n.styles,i=n.animate;return(0,p.jsx)(Z,{onSubmit:t&&t,style:o,mode:r,animate:i,children:e})})),w=(0,h.memo)(b),Z=g.ZP.form(t||(t=(0,v.Z)(["\n    height:45rem;\n    --form-width: 100%;\n    width:var(--form-width);\n    display:flex;\n    align-items:center;\n    flex-direction:column;\n    /* max-width:35rem; */\n    background:var(--form-bg);\n    border-radius: 0.5rem;\n    box-shadow: var(--form-shadow);\n    margin-inline: auto;\n\n\n    ","\n    ","\n    button{\n        margin-top: auto;   //button will be at the bottom of the form\n        margin-bottom: 2rem;\n    }\n\n    /* animate flag */\n    ","\n\n    @keyframes animate_form{\n        0%{\n            opacity:0;\n            transform:translateX(-100%);\n        }\n        50%{\n            transform:translateX(50%);\n        }\n    }\n\n"])),(function(n){var e=n.mode;return"login"===e||"register"===e?(0,g.iv)(o||(o=(0,v.Z)(["\n                border-radius:0.5rem;\n                padding-inline:2rem;\n                /* padding-block-end:2rem; */\n                padding-block-start: 0;\n                box-shadow: none;\n\n                @media (min-width: 650px){\n                    max-width:40rem;\n                }\n\n            "]))):"create_note"===e?(0,g.iv)(i||(i=(0,v.Z)(["\n                height:25rem;\n                @media (min-width:700px){\n                    height:50rem;\n                }\n            "]))):void 0}),(function(n){if(!0===n.no_bg)return(0,g.iv)(a||(a=(0,v.Z)(["\n            background:inherit;\n        "])))}),(function(n){if(n.animate)return(0,g.iv)(s||(s=(0,v.Z)(["\n                animation:animate_form 0.4s ease-in forwards;\n            "])))})),x=r(5158),C=function(n){return(0,p.jsx)("label",{className:n.focus?"transform":"",children:n.text})},k=(0,h.memo)(C),y=r(5501),j=r(6030),L=function(){var n=(0,h.useState)({}),e=(0,d.Z)(n,2),r=e[0],t=e[1],o=(0,h.useState)(!1),i=(0,d.Z)(o,2),a=i[0],s=i[1],m=(0,h.useState)(Array()),v=(0,d.Z)(m,2),g=v[0],p=v[1],b=(0,h.useState)(""),Z=(0,d.Z)(b,2),C=Z[0],L=Z[1],S=(0,h.useState)(!1),_=(0,d.Z)(S,2),F=_[0],D=_[1],E=(0,h.useState)(new AbortController),M=(0,d.Z)(E,1)[0],N=(0,j.I0)(),T=(0,h.useCallback)(function(){var n=(0,u.Z)(f().mark((function n(e,t,o){var i,a;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,o(!0),s(!0),n.next=6,fetch(t,{signal:M.signal,body:JSON.stringify(r),method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}});case 6:return i=n.sent,n.next=9,i.json();case 9:(a=n.sent)._id&&N((0,y.R9)(a.email)),"errors"in a&&p(a.errors),"error"in a&&L(a.error),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(1),p(Array(n.t0));case 18:return n.prev=18,o(!1),s(!1),n.finish(18);case 22:case"end":return n.stop()}}),n,null,[[1,15,18,22]])})));return function(e,r,t){return n.apply(this,arguments)}}(),[r]),V=(0,h.useCallback)((function(){return p([])}),[]),H=(0,h.useCallback)((function(){return L("")}),[]);(0,h.useEffect)((function(){var n;return 0!=g.length&&(n=setTimeout((function(){return V()}),4e3)),function(){return clearTimeout(n)}}),[g]),(0,h.useEffect)((function(){var n;return C&&(n=setTimeout((function(){return H()}),4e3)),function(){return clearTimeout(n)}}),[C]);var I=(0,h.useCallback)((function(n,e){t((function(r){return(0,l.Z)((0,l.Z)({},r),{},(0,c.Z)({},e,n))}))}),[r]);return{addNewState:(0,h.useCallback)((function(n){var e=n.state,t=n.placeholder,o=n.name,i=n.id,a=n.type;return{value:r[e]||"",onChange:function(n){return I(n.target.value,e)},placeholder:t,name:o,id:i,type:a}}),[r]),setStates:t,states:r,Form:w,FormGroup:x.Z,FormLabel:k,errors:g,loading:a,handleSubmit:T,disabled:F,setDisabled:D,error:C}}},5394:function(n,e,r){var t=r(885),o=r(2791);e.Z=function(n){var e=n.states,r=n.mode,i=void 0===r?"login":r,a=(0,o.useState)(!0),s=(0,t.Z)(a,2),c=s[0],l=s[1],u=(0,o.useState)({number:!1,lowercase:!1,capital:!1,characters:!1}),d=(0,t.Z)(u,2),m=d[0],f=d[1];return(0,o.useEffect)((function(){"login"==i&&(e.email&&e.password?l(!1):l(!0))}),[e]),"login"==i?{isDisabled:c,setIsDisabled:l}:{isDisabled:c,setIsDisabled:l,validations:m,setValidations:f}}},8648:function(n,e,r){var t=r(2791),o=r(6871),i=r(7572),a=r(4955),s=r(184);e.Z=function(n){var e=(0,i.Z)().user,r=(0,o.s0)();(0,a.Z)({shouldCheckIfUserLogged:!e.email});var c=(0,t.useCallback)((function(){return r("/")}),[]);return(0,t.useEffect)((function(){e.email&&c()}),[e.email]),(0,s.jsx)(s.Fragment,{children:n.children})}}}]);
//# sourceMappingURL=222.e6bd55a3.chunk.js.map