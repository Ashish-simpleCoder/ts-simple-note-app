import { ChangeEvent, Dispatch, memo, SetStateAction, useCallback } from "react"
import styled from "styled-components"


const Input = ({type = 'text', value, onChange, setFocus, name, id, setInvalid }: {
    type?:'password' | 'text' | 'email', value?: string,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    setFocus?: Dispatch<SetStateAction<boolean>>,
    name?: string,
    id?: string,
    setInvalid?: Dispatch<SetStateAction<boolean>>
}) => {

    const handleFocus = useCallback(()=>{
        setFocus && setFocus(true)
    } , [setFocus])

    const handleBlur = useCallback((e)=>{
        setFocus && setFocus(e.target.value.length>0 )
    } , [setFocus])

    return(
        <StyledInput  onInvalid={() => setInvalid && setInvalid(v => !v)} type={type} value={value} onChange={onChange} onFocus={handleFocus} onBlur={handleBlur} name={name} id={id}/>
    )
}
export default memo(Input)

const StyledInput = styled.input`
    font-size: clamp(1.6rem, 1.6rem, 1.6vw);
    &:focus{
        background-color: var(--input-focus-bg);
    }
    &:invalid{
    }
`