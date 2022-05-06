import { FormEvent, memo, ReactNode } from "react";
import styled, { css, CSSProperties } from 'styled-components'



const Form = memo(({children, mode, handleSubmit, styles, animate}:{
    children:ReactNode, no_bg?:boolean, mode?: FormMode, handleSubmit?: ((e: FormEvent<HTMLFormElement>) => Promise<void>) | undefined
    styles?:CSSProperties,
    animate?: true | false,
})=>{

    return(
        <StyledForm onSubmit={(e)=>{
                e.preventDefault()
                handleSubmit && handleSubmit(e)
            }}
            style={styles}
            mode={mode}   //for margin-top
            animate={animate}
        >
            {children}
        </StyledForm>
    )
})
export default Form



const StyledForm = styled.form<{no_bg?: true | false, mode?: FormMode, animate?: true|false}>`
    height:45rem;
    width:90%;
    display:flex;
    align-items:center;
    flex-direction:column;
    max-width:35rem;
    background:var(--form-bg);
    border-radius: 0.5rem;
    box-shadow: var(--form-shadow);
    margin-inline: auto;


    ${({mode})=>{
        if(mode === 'login' || mode === 'register'){
            return css`
                max-width:40rem;
                border-radius:0.5rem;
                padding-inline:2rem;
                /* padding-block-end:2rem; */
                padding-block-start: 0;
                box-shadow: none;
            `
        }
        if(mode === 'create_note'){
            return css`
                height:25rem;
                @media (min-width:700px){
                    height:50rem;
                }
            `
        }
    }}
    ${({no_bg})=>{
       if(no_bg === true) {
           return css`
            background:inherit;
        `
        }
    }}
    button{
        margin-top: auto;   //button will be at the bottom of the form
        margin-bottom: 2rem;
    }

    /* animate flag */
    ${({animate})=>{
        if(animate){
            return css`
                animation:animate_form 0.4s ease-in forwards;
            `
        }
    }}

    @keyframes animate_form{
        0%{
            opacity:0;
            transform:translateX(-100%);
        }
        50%{
            transform:translateX(50%);
        }
    }

`
