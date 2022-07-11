"use strict";(self.webpackChunksimple_note=self.webpackChunksimple_note||[]).push([[660],{5158:function(n,e,r){var t,a=r(168),i=r(885),o=r(2791),s=r(5751),u=r(184),c=function(n){var e=n.children,r=n.styles,t=(0,o.useState)(!1),a=(0,i.Z)(t,2),s=a[0],c=a[1];return(0,u.jsx)(l,{style:r,children:o.Children.map(e,(function(n){return"string"==typeof n.type?n:(0,o.cloneElement)(n,{focus:s,setFocus:c})}))})};e.Z=(0,o.memo)(c);var l=s.ZP.div(t||(t=(0,a.Z)(["\n    display:flex;\n    align-items:center;\n    width:100%;\n    height: clamp(3.5rem ,3.8rem, 3.8vw);\n    position:relative;\n    margin-top:6rem;\n    background-color: var(--form-group-bg);\n    border-radius: 0.5rem;\n\n    div.utility.invalid, div.utility.focus-border{\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        pointer-events: none;\n        border-radius: 0.5rem;\n        border: 1px solid transparent;\n    }\n\n\n    /* giving margin on email form field */\n    &:nth-of-type(1){\n        margin-top:3rem;\n    }\n    div.svg-container{\n        height: 100%;\n        width: 4rem;\n        display: grid;\n        place-items: center;\n    }\n\n    label{\n        position:absolute;\n        transform: translateX(5rem);\n        pointer-events:none;\n        transition:transform 0.3s;\n    }\n    .transform{\n        transform:translate(1rem, -170%);\n    }\n\n\n    >input{\n        padding-inline-end: 1rem;\n        flex: 1;\n        height: 100%;\n        outline: none;\n        background-color: transparent !important;\n    }\n\n"])))},5407:function(n,e,r){r.r(e);var t=r(1413),a=r(2791),i=r(6030),o=r(389),s=r(6416),u=r(9753),c=r(8189),l=r(5158),d=r(184),m=function(n){var e=(0,a.useMemo)((function(){return"search"}),[]),r=(0,u.Z)(),m=r.addNewState,f=r.states,v=(0,i.I0)();return(0,a.useEffect)((function(){v((0,o.q)(f[e]))}),[f[e]]),(0,d.jsxs)(l.Z,{styles:(0,t.Z)({backgroundColor:"var(--input-bg)",width:"unset",margin:"unset",marginInlineStart:"auto",marginInlineEnd:"clamp(2rem, 4rem, 4vw)"},n.style),children:[(0,d.jsx)(s.Z,{}),(0,d.jsx)(c.Z,(0,t.Z)((0,t.Z)({},m({state:e,name:"search",placeholder:"search notes..."})),{},{mode:"search_bar"})),(0,d.jsx)("div",{className:"utility focus-border"})]})};e.default=(0,a.memo)(m)},8189:function(n,e,r){var t,a,i=r(168),o=r(1413),s=r(2791),u=r(5751),c=r(184),l=function(n){var e=(0,s.useCallback)((function(){var e;return null===(e=n.setFocus)||void 0===e?void 0:e.call(n,!0)}),[n.setFocus]),r=(0,s.useCallback)((function(e){var r;return null===(r=n.setFocus)||void 0===r?void 0:r.call(n,e.target.value.length>0)}),[n.setFocus]);return(0,c.jsx)(d,(0,o.Z)((0,o.Z)({},n),{},{onFocus:e,onBlur:r}))};e.Z=(0,s.memo)(l);var d=u.ZP.input(t||(t=(0,i.Z)(["\n    height: clamp(3.5rem, 3.5rem, 3.5vw);\n    padding-inline: 1rem;\n\n\n    &:focus + div.utility.focus-border{\n        /* background-color: var(--input-focus-bg); */\n        outline: 1px solid var(--outline);\n    }\n\n    /* "," */\n\n\n    /* &:invalid + div.invalid{\n        border-color: var(--dan-200);\n    }\n\n\n    &:valid + div.invalid{\n        border-color: var(--success-300);\n    } */\n"])),(function(n){if("search_bar"==n.mode)return(0,u.iv)(a||(a=(0,i.Z)(["\n            /* height: inherit; */\n            "])))}))},5789:function(n,e,r){var t=r(2791),a=r(6030);e.Z=function(){var n=(0,a.v9)((function(n){return n.theme.value})),e=(0,a.I0)();return(0,t.useEffect)((function(){document.body.classList.toggle("dark",n),localStorage.setItem("dark",JSON.stringify(n))}),[n]),{theme:n,dispatch:e}}},6416:function(n,e,r){var t=r(2791),a=r(5789),i=r(184);e.Z=function(){var n=(0,a.Z)().theme,e=(0,t.useMemo)((function(){return n?"#8D63F1":"#3B0C9E"}),[n]);return(0,i.jsx)("div",{className:"svg-container",children:(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z",stroke:e,strokeOpacity:"0.7",strokeWidth:"2",strokeLinecap:"round"})})})}},9753:function(n,e,r){r.d(e,{Z:function(){return _}});var t,a,i,o,s,u=r(4942),c=r(1413),l=r(5861),d=r(885),m=r(7757),f=r.n(m),v=r(2791),h=r(168),p=r(5751),g=r(184),b=(0,v.memo)((function(n){var e=n.children,r=n.mode,t=n.onSubmit,a=n.styles,i=n.animate;return(0,g.jsx)(w,{onSubmit:t&&t,style:a,mode:r,animate:i,children:e})})),Z=(0,v.memo)(b),w=p.ZP.form(t||(t=(0,h.Z)(["\n    height:45rem;\n    --form-width: 100%;\n    width:var(--form-width);\n    display:flex;\n    align-items:center;\n    flex-direction:column;\n    /* max-width:35rem; */\n    background:var(--form-bg);\n    border-radius: 0.5rem;\n    box-shadow: var(--form-shadow);\n    margin-inline: auto;\n\n\n    ","\n    ","\n    button{\n        margin-top: auto;   //button will be at the bottom of the form\n        margin-bottom: 2rem;\n    }\n\n    /* animate flag */\n    ","\n\n    @keyframes animate_form{\n        0%{\n            opacity:0;\n            transform:translateX(-100%);\n        }\n        50%{\n            transform:translateX(50%);\n        }\n    }\n\n"])),(function(n){var e=n.mode;return"login"===e||"register"===e?(0,p.iv)(a||(a=(0,h.Z)(["\n                border-radius:0.5rem;\n                padding-inline:2rem;\n                /* padding-block-end:2rem; */\n                padding-block-start: 0;\n                box-shadow: none;\n\n                @media (min-width: 650px){\n                    max-width:40rem;\n                }\n\n            "]))):"create_note"===e?(0,p.iv)(i||(i=(0,h.Z)(["\n                height:25rem;\n                @media (min-width:700px){\n                    height:50rem;\n                }\n            "]))):void 0}),(function(n){if(!0===n.no_bg)return(0,p.iv)(o||(o=(0,h.Z)(["\n            background:inherit;\n        "])))}),(function(n){if(n.animate)return(0,p.iv)(s||(s=(0,h.Z)(["\n                animation:animate_form 0.4s ease-in forwards;\n            "])))})),x=r(5158),k=function(n){return(0,g.jsx)("label",{className:n.focus?"transform":"",children:n.text})},y=(0,v.memo)(k),C=r(5501),S=r(6030),j=function(){var n=(0,v.useState)(new AbortController),e=(0,d.Z)(n,1)[0],r=(0,v.useCallback)(function(){var n=(0,l.Z)(f().mark((function n(r){var t,a,i,o,s;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.url,a=r.method,i=r.body,o=new Request(t,{method:a,body:JSON.stringify(i),headers:{"content-type":"application/json"},credentials:"include",signal:e.signal}),n.prev=2,n.next=5,fetch(o);case 5:return s=n.sent,n.abrupt("return",s.json());case 9:return n.prev=9,n.t0=n.catch(2),n.abrupt("return",new Error("error occured",{cause:Error(n.t0)}));case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}(),[]);return{handleSubmit:r}},F=r(6871),_=function(){var n=(0,v.useState)({}),e=(0,d.Z)(n,2),r=e[0],t=e[1],a=(0,v.useState)(!1),i=(0,d.Z)(a,2),o=i[0],s=i[1],m=(0,v.useState)(Array()),h=(0,d.Z)(m,2),p=h[0],g=h[1],b=(0,v.useState)(""),w=(0,d.Z)(b,2),k=w[0],_=w[1],E=(0,v.useState)(!1),I=(0,d.Z)(E,2),N=I[0],L=I[1],T=(0,S.I0)(),D=j().handleSubmit,M=(0,F.s0)(),O=(0,v.useCallback)(function(){var n=(0,l.Z)(f().mark((function n(e){var t,a,i,o;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.e,a=e.url,i=e.setIsDisabled,t.preventDefault(),n.prev=2,i(!0),s(!0),n.next=7,D({url:a,body:r,method:"POST"});case 7:(o=n.sent)._id&&!o.email&&M("/login"),o._id&&T((0,C.R9)(o.email)),"errors"in o&&g(o.errors),"error"in o&&_(o.error),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(2),g(Array(n.t0));case 17:return n.prev=17,i(!1),s(!1),n.finish(17);case 21:case"end":return n.stop()}}),n,null,[[2,14,17,21]])})));return function(e){return n.apply(this,arguments)}}(),[r]),P=(0,v.useCallback)((function(){return g([])}),[]),A=(0,v.useCallback)((function(){return _("")}),[]);(0,v.useEffect)((function(){var n;return 0!=p.length&&(n=setTimeout(P,4e3)),function(){return clearTimeout(n)}}),[p]),(0,v.useEffect)((function(){var n;return k&&(n=setTimeout(A,4e3)),function(){return clearTimeout(n)}}),[k]);var B=(0,v.useCallback)((function(n,e){t((function(r){return(0,c.Z)((0,c.Z)({},r),{},(0,u.Z)({},e,n))}))}),[r]);return{addNewState:(0,v.useCallback)((function(n){return(0,c.Z)({value:r[n.state]||"",onChange:function(e){return B(e.target.value,n.state)}},n)}),[r]),setStates:t,states:r,Form:Z,FormGroup:x.Z,FormLabel:y,errors:p,loading:o,handleSubmit:O,disabled:N,setDisabled:L,error:k,setLoading:s}}}}]);
//# sourceMappingURL=SearchBar.ae38ac65.chunk.js.map