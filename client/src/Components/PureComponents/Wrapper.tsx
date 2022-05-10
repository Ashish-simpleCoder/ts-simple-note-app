import { memo, ReactNode, CSSProperties } from "react";
import styled, { css } from "styled-components";

type ModeTypes =
    | 'edit_note' | 'note_output' | 'hero'
    | 'create_note_container' | 'notes-output-section' | 'notes_container' | 'sign_form_container'


type WrapperProps = {
    children: ReactNode,
    styles?: CSSProperties,
    mode?: ModeTypes,
    cn?: string
}


const Wrapper = memo((props : WrapperProps)=>{
    const {children, styles, mode, cn} = props

    return (
        <StyledWrapper mode={mode} style={styles} className={(mode ? mode : '')+" "+(cn ? cn : '')}>
            {children}
        </StyledWrapper>
    )
})
export default Wrapper



const StyledWrapper = styled.section<{mode?:ModeTypes}>`
    display:flex;
    overflow:hidden;
    position:relative;
    padding:2rem;
    --width: 30rem;

    ${(props)=>{
        switch(props.mode){

            case "create_note_container": return css`
                flex-direction: column;
                margin-bottom:3rem;
                input{
                    margin-block-end: 2rem;
                }
                textarea{
                    height: 60%;
                    resize: none;
                    margin-block-end: 3rem;
                    @media (max-width: 700px){
                        height: 15rem;
                    }
                }

                @media (min-width:700px){
                    height:100%;
                    position:fixed;
                    border-right: 1px solid var(--brand-border-200);
                }
            `
            case 'sign_form_container': return css`
                background-color: var(--form-bg);
                box-shadow: var(--form-shadow);
                border-radius: 0.5rem;
                transform: translateY(3rem);

                @media (max-width: 700px){
                    form{
                        padding-inline: unset;
                    }
                }


                @media (min-width: 700px){
                    display: flex;
                    max-width: 70rem;
                    padding-inline: 2rem;
                    margin-inline: auto;
                }
            `

            case 'notes-output-section': return css`
                gap: 2rem;
                flex-wrap: wrap;

                @media (min-width:700px){
                    position:relative;
                    left:var(--width);
                    width:calc(100% - var(--width));
                    justify-content: space-around;
                }
            `

            case 'notes_container': return css`
                justify-content:center;
                gap:3rem;
                padding:2rem;
                flex-wrap:wrap;
                @media (min-width:700px){
                    justify-content:space-around;
                }
            `
            case 'edit_note': return css`
                width:100%;
                height:100%;
                top:0 !important;
                inset:0;
                position:fixed;
                align-items:center;
                justify-content:center;
                background:var(--edit-modal-bg);
                display:none;
                border-radius:0.5rem;
            `
            default: return css`
            `
        }
    }}

    img{
        display:flex;
        width:clamp(23rem, 28rem, 28vw);
        height:clamp(28rem, 32rem, 32vw);
        transform:rotate(-20deg) scale(0.8);
        transform-origin:center;
    }
`


// case 'hero': return css`
//                 width:100%;
//                 align-items:center;
//                 justify-content:center;
//                 transform-origin:center;
//                 flex-direction:column;
//                 text-align:center;
//                 padding:2rem;
//                 /* animation the every children in hero section */
//                 @keyframes animateLoad {
//                     0%{
//                         transform: rotate(15deg) translateY(300%) scale(0.9);
//                         opacity: 0;
//                     }
//                     70%{
//                         transform: rotate(0) translateY(-50%) scale(1.1);
//                     }
//                     100%{ }
//                 }
//                 @media (min-width:700px){
//                     width:50%;
//                 }
//             `