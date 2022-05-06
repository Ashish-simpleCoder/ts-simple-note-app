import { Children, cloneElement, memo, ReactNode, useState } from "react"
import styled, { css } from "styled-components"

const FormGroup = ({children}: {children: JSX.Element | JSX.Element[]}) => {
    const [focus, setFocus] = useState(false)
    const [invalid, setInvalid] = useState(true)

    return(
        <StyledFormGroup invalid={invalid}>
            {
                Children.map(children, (child:JSX.Element)=>{
                    if(typeof child.type == 'string') return child
                    return cloneElement(child, {focus, setFocus, invalid, setInvalid})
                })
            }
        </StyledFormGroup>
    )
}
export default memo(FormGroup)

const StyledFormGroup = styled.div<{invalid?: boolean}>`
    display:flex;
    align-items:center;
    width:100%;
    height: clamp(4rem ,4.5rem, 4.5vw);
    position:relative;
    margin-top:6rem;
    background-color: var(--form-group-bg);
    border-radius: 0.5rem;

    ${({invalid}) => {
        if(invalid){
            return css`
            border: 1px solid var(--dan-300);
            `
        }
    }}

    /* giving margin on email form field */
    &:nth-of-type(1){
        margin-top:3rem;
    }
    div.svg-container{
        height: 100%;
        width: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    label{
        position:absolute;
        /* top:50%; */
        /* left:0; */
        transform: translateX(5rem);
        /* transform:translate(6rem, -50%); */
        pointer-events:none;
        transition:transform 0.3s;
    }
    .transform{
        transform:translate(1rem, -170%);
    }


    >input{
        /* width:100%; */
        /* padding:1rem 5rem 1rem 6rem; */
        padding-inline-end: 1rem;
        flex: 1;
        height: 100%;
        outline: none;
        background-color: transparent !important;
    }

    svg{
        /* position: absolute; */
        /* transform:translateY(0%) translateX(100%); */
        /* top: 2rem; */

    }
`