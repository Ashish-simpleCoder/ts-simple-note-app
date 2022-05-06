import { ChangeEvent, Dispatch, memo, SetStateAction, useCallback } from "react"
import styled from "styled-components"


const Input = ({type = 'text', value, onChange, setFocus, name, id, placeholder }: {
    type?: 'password' | 'text' | 'email', value?: string,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    setFocus?: Dispatch<SetStateAction<boolean>>,
    name?: string,
    id?: string,
    placeholder?: string
}) => {

    const handleFocus = useCallback(()=>{
        setFocus && setFocus(true)
    } , [setFocus])

    const handleBlur = useCallback((e)=>{
        setFocus && setFocus(e.target.value.length>0 )
    } , [setFocus])

    return(
        <StyledInput type={type} value={value} onChange={onChange} onFocus={handleFocus} onBlur={handleBlur} name={name} id={id} placeholder={placeholder}/>
    )
}
export default memo(Input)



const StyledInput = styled.input`
    font-size: clamp(1.6rem, 1.6rem, 1.6vw);
    height: clamp(3.5rem, 4rem, 4vw);
    padding-inline: 1rem;

    &:focus{
        background-color: var(--input-focus-bg);
    }


    /* &:invalid + div.invalid{
        border-color: var(--dan-200);
    }


    &:valid + div.invalid{
        border-color: var(--success-300);
    } */
`