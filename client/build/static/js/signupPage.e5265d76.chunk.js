"use strict";(self.webpackChunksimple_note=self.webpackChunksimple_note||[]).push([[170],{8901:function(n,e,t){var r,i,a,s,o,u,d,c=t(168),l=t(2791),m=t(5751),f=t(184),p=function(n){var e=n.children,t=n.styles,r=n.mode,i=n.cn;return(0,f.jsx)(h,{mode:r,style:t,className:(r||"")+" "+(i||""),children:e})};e.Z=(0,l.memo)(p);var h=m.ZP.section(r||(r=(0,c.Z)(["\n    display:flex;\n    overflow:hidden;\n    position:relative;\n    padding:2rem;\n    --width: 30rem;\n\n    ","\n\n    img{\n        display:flex;\n        width:clamp(23rem, 28rem, 28vw);\n        height:clamp(28rem, 32rem, 32vw);\n        transform:rotate(-20deg) scale(0.8);\n        transform-origin:center;\n    }\n"])),(function(n){switch(n.mode){case"create_note_container":return(0,m.iv)(i||(i=(0,c.Z)(["\n                flex-direction: column;\n                margin-bottom:3rem;\n                input{\n                    margin-block-end: 2rem;\n                }\n                textarea{\n                    height: 60%;\n                    resize: none;\n                    margin-block-end: 3rem;\n                    @media (max-width: 700px){\n                        height: 15rem;\n                    }\n                }\n\n                @media (min-width:700px){\n                    height:100%;\n                    position:fixed;\n                    border-right: 1px solid var(--brand-border-200);\n                }\n            "])));case"sign_form_container":return(0,m.iv)(a||(a=(0,c.Z)(["\n                background-color: var(--form-bg);\n                box-shadow: var(--form-shadow);\n                border-radius: 0.5rem;\n                transform: translateY(3rem);\n\n                @media (max-width: 700px){\n                    form{\n                        padding-inline: unset;\n                    }\n                }\n\n\n                @media (min-width: 700px){\n                    display: flex;\n                    max-width: 70rem;\n                    padding-inline: 2rem;\n                    margin-inline: auto;\n                }\n            "])));case"notes-output-section":return(0,m.iv)(s||(s=(0,c.Z)(["\n                gap: 2rem;\n                flex-wrap: wrap;\n\n                @media (min-width:700px){\n                    position:relative;\n                    left:var(--width);\n                    width:calc(100% - var(--width));\n                    justify-content: space-around;\n                }\n            "])));case"notes_container":return(0,m.iv)(o||(o=(0,c.Z)(["\n                justify-content:center;\n                gap:3rem;\n                padding:2rem;\n                flex-wrap:wrap;\n                @media (min-width:700px){\n                    justify-content:space-around;\n                }\n            "])));case"edit_note":return(0,m.iv)(u||(u=(0,c.Z)(["\n                position:fixed;\n                inset:0;\n                background: rgba(0,0,0, 0.5);\n            "])));default:return(0,m.iv)(d||(d=(0,c.Z)(["\n            "])))}}))},2464:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r=t(1413),i=t(885),a=t(2791),s=t(6871),o=t(629),u=t(9719),d=t(8189),c=t(8901),l=t(7572),m=t(4060),f=t(592),p=t(9753),h=t(5394),x=t(3305),v=t(1442),w=t(8648),g=t(4866);function Z(n){return/[A-Z]/.test(n)}function b(n){return n.length>4}function j(n){return/[0-9]/.test(n)}function y(n){return/[a-z]/.test(n)}var _=t(184),k=(0,a.lazy)((function(){return t.e(895).then(t.bind(t,912))})),C=(0,a.lazy)((function(){return t.e(717).then(t.bind(t,813))})),E=(0,a.lazy)((function(){return t.e(323).then(t.bind(t,6263))})),S=function(){var n=(0,l.Z)().user,e=(0,s.s0)(),t=(0,p.Z)(),w=t.addNewState,S=t.setStates,z=t.states,N=t.Form,L=t.FormGroup,D=t.FormLabel,F=t.loading,A=t.handleSubmit,I=t.errors,P=(0,h.Z)({states:z,mode:"signup"}),W=P.isDisabled,q=P.validations,G=P.setValidations,R=P.setIsDisabled,U=(0,x.Z)({width:700}),V=(0,i.Z)(U,1)[0],Y=(0,a.useRef)(null),B=(0,a.useCallback)((function(){return e("/login")}),[]);(0,a.useEffect)((function(){n._id&&B()}),[n._id]);var H=(0,a.useCallback)((function(n){S((function(e){return(0,r.Z)((0,r.Z)({},e),{},{password:n})}))}),[]);(0,a.useEffect)((function(){var n,e=document.querySelector("#password");Y.current=e;var t=function(n){H(n);var e=[j(n),Z(n)],t=e[0],i=e[1],a=[b(n),y(n)],s=a[0],o=a[1];G&&G((function(n){return(0,r.Z)((0,r.Z)({},n),{},{number:t,capital:i,lowercase:o,characters:s})})),t&&i&&s&&o&&""!=z.email?R&&R(!1):R(!0)};return null===(n=Y.current)||void 0===n||n.addEventListener("input",(function(n){return t(n.target.value)})),function(){var n;return null===(n=Y.current)||void 0===n?void 0:n.removeEventListener("input",(function(n){return t(n.target.value)}))}}),[]),(0,a.useEffect)((function(){q&&q.capital&&q.characters&&q.lowercase&&q.number&&z.email?R(!1):R(!0)}),[z.email]);return(0,a.useEffect)((function(){return document.title="Sign Up",function(){document.title="Simple Note App"}}),[]),(0,_.jsxs)(c.Z,{mode:"sign_form_container",children:[(0,_.jsxs)(N,{mode:"register",onSubmit:function(n){return A({e:n,url:"/api/user",setIsDisabled:R})},children:[(0,_.jsx)(u.Z,{children:"Create an account"}),(0,_.jsxs)(L,{children:[(0,_.jsx)(D,{text:"email"}),(0,_.jsx)(m.Z,{}),(0,_.jsx)(d.Z,(0,r.Z)({},w({state:"email",name:"email",type:"email"}))),(0,_.jsx)("div",{className:"utility focus-border"}),(0,_.jsx)("div",{className:"invalid"})]}),(0,_.jsxs)(L,{children:[(0,_.jsx)(D,{text:"Password"}),(0,_.jsx)(f.Z,{}),(0,_.jsx)(v.Z,{condition:!V,children:(0,_.jsx)(g.Z,{Comp:function(){return(0,_.jsx)(C,{validations:q})}})}),(0,_.jsx)(d.Z,(0,r.Z)({},w({state:"password",name:"password",id:"password",type:"password"}))),(0,_.jsx)("div",{className:"utility focus-border"})]}),(0,_.jsx)(v.Z,{condition:0!=I.length,children:(0,_.jsx)(g.Z,{Comp:function(){return(0,_.jsx)(E,{errors:I})}})}),(0,_.jsx)(o.Z,{mode:"login_form_btn",isDisabled:W,loader:F,children:"Signup"})]}),V&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("hr",{style:{transform:"rotate(180deg)",opacity:"0.1"}}),(0,_.jsx)(g.Z,{Comp:function(){return(0,_.jsx)(k,{validations:q})}})]})]})},z=(0,a.memo)((function(){return(0,_.jsx)(w.Z,{children:(0,_.jsx)(S,{})})}))},3305:function(n,e,t){var r=t(885),i=t(2791);e.Z=function(n){var e=n.width,t=void 0===e?750:e,a=(0,i.useState)(window.innerWidth>t),s=(0,r.Z)(a,2),o=s[0],u=s[1],d=(0,i.useCallback)((function(){return u(window.innerWidth>t)}),[]);return(0,i.useEffect)((function(){return window.addEventListener("resize",d),function(){return window.removeEventListener("resize",d)}}),[]),[o]}}}]);
//# sourceMappingURL=signupPage.e5265d76.chunk.js.map