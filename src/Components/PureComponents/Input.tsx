import { ChangeEvent, CSSProperties, Dispatch, memo, SetStateAction, useCallback, useMemo } from "react"
import styled, { css } from "styled-components"

type Mode = 'search_bar'| any

const Input = ({type = 'text', value, onChange, setFocus, name, id, placeholder, styles, mode }: {
    type?: 'password' | 'text' | 'email', value?: string,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    setFocus?: Dispatch<SetStateAction<boolean>>,
    name?: string,
    id?: string,
    placeholder?: string,
    styles?: CSSProperties,
    mode?: Mode
}) => {

    const handleFocus = useCallback(()=>{
        setFocus && setFocus(true)
    } , [setFocus])

    const handleBlur = useCallback((e)=>{
        setFocus && setFocus(e.target.value.length>0 )
    } , [setFocus])

    const props = useMemo(() => ({
        type, value, onChange, onFocus:handleFocus, onBlur: handleBlur, name, id, placeholder, styles, mode
    }), [type, value, onChange, handleFocus, handleBlur, name, id, placeholder, styles, mode])

    return(
        <StyledInput {...props}/>
    )
}
export default memo(Input)



const StyledInput = styled.input<{mode?: Mode}>`
    font-size: clamp(1.6rem, 1.6rem, 1.6vw);
    height: clamp(3.5rem, 4rem, 4vw);
    padding-inline: 1rem;
    font-weight: 600;


    &:focus{
        background-color: var(--input-focus-bg);
    }
    &:focus + div.utility.focus-border{
        background-color: var(--input-focus-bg);
        outline: 1px solid var(--outline);
    }

    ${({mode}) => {
        if(mode == 'search_bar'){
            return css`
            /* height: clamp(3rem, 3.5rem, 3.5vw) !important; */
            height: inherit;
            `
        }
    }}


    /* &:invalid + div.invalid{
        border-color: var(--dan-200);
    }


    &:valid + div.invalid{
        border-color: var(--success-300);
    } */
`