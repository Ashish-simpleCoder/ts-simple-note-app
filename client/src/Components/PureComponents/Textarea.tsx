import { ChangeEvent, Dispatch, memo, SetStateAction, useCallback } from "react"
import styled from "styled-components"


const Textarea = (props: {
    value?: string,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    setFocus?: Dispatch<SetStateAction<boolean>>,
    name?: string,
    id?: string,
    placeholder?: string
}) => {

    const handleFocus = useCallback(()=>{
        props.setFocus && props.setFocus(true)
    } , [props.setFocus])

    const handleBlur = useCallback((e)=>{
        props.setFocus && props.setFocus(e.target.value.length>0 )
    } , [props.setFocus])

    return(
        <StyledTextArea {...props} onFocus={handleFocus} onBlur={handleBlur}/>
        // <StyledTextArea value={value} onChange={onChange} onFocus={handleFocus} onBlur={handleBlur} name={name} id={id} placeholder={placeholder}/>
    )
}
export default memo(Textarea)



const StyledTextArea = styled.textarea`
    font-size: 1.6rem;
    padding-inline: 1rem;
    background: var(--input-bg);
    border: none;
    border-radius: 0.5rem;

    &:focus{
        /* background-color: var(--input-focus-bg); */
    }

    /* &:invalid + div.invalid{
        border-color: var(--dan-200);
    }


    &:valid + div.invalid{
        border-color: var(--success-300);
    } */
`