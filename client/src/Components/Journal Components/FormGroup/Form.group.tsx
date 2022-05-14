import { Children, cloneElement, memo, useState } from "react"
import styled, { CSSProperties }  from "styled-components"


const FormGroup = ({children, styles}: {children: JSX.Element | JSX.Element[], styles?: CSSProperties}) => {
    const [focus, setFocus] = useState(false)

    return(
        <StyledFormGroup style={styles}>
            {
                Children.map(children, (child:JSX.Element)=>{
                    if(typeof child.type == 'string') return child
                    return cloneElement(child, {focus, setFocus })
                })
            }
        </StyledFormGroup>
    )
}
export default memo(FormGroup)

const StyledFormGroup = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    height: clamp(3.5rem ,3.8rem, 3.8vw);
    position:relative;
    margin-top:6rem;
    background-color: var(--form-group-bg);
    border-radius: 0.5rem;

    div.utility.invalid, div.utility.focus-border{
        position: absolute;
        width: 100%;
        height: 100%;
        pointer-events: none;
        border-radius: 0.5rem;
        border: 1px solid transparent;
    }


    /* giving margin on email form field */
    &:nth-of-type(1){
        margin-top:3rem;
    }
    div.svg-container{
        height: 100%;
        width: 4rem;
        display: grid;
        place-items: center;
    }

    label{
        position:absolute;
        transform: translateX(5rem);
        pointer-events:none;
        transition:transform 0.3s;
    }
    .transform{
        transform:translate(1rem, -170%);
    }


    >input{
        padding-inline-end: 1rem;
        flex: 1;
        height: 100%;
        outline: none;
        background-color: transparent !important;
    }

`