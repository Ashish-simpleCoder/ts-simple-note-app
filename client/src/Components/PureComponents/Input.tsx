import { ChangeEvent, CSSProperties, Dispatch, memo, SetStateAction, useCallback } from "react"
import styled, { css } from "styled-components"

type Mode = 'search_bar'| any

const Input = ( props: {
    type?: 'password' | 'text' | 'email',
    value?: string,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    setFocus?: Dispatch<SetStateAction<boolean>>,
    name?: string,
    id?: string,
    placeholder?: string,
    styles?: CSSProperties,
    mode?: Mode
}) => {

    const handleFocus = useCallback(()=> props.setFocus?.(true) , [props.setFocus])
    const handleBlur = useCallback((e)=> props.setFocus?.(e.target.value.length > 0 ) , [props.setFocus])

    return(
        <StyledInput {...props} onFocus={handleFocus} onBlur={handleBlur}/>
    )
}
export default memo(Input)



const StyledInput = styled.input<{mode?: Mode}>`
    height: clamp(3.5rem, 3.5rem, 3.5vw);
    padding-inline: 1rem;


    &:focus + div.utility.focus-border{
        /* background-color: var(--input-focus-bg); */
        outline: 1px solid var(--outline);
    }

    /* ${({mode}) => {
        if(mode == 'search_bar'){
            return css`
            /* height: inherit; */
            `
        }
    }} */


    /* &:invalid + div.invalid{
        border-color: var(--dan-200);
    }


    &:valid + div.invalid{
        border-color: var(--success-300);
    } */
`