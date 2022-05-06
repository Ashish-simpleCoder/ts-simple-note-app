import { memo } from "react"
import styled from "styled-components"
// import styled from "styled-components"
type LabelProps = { text:string, focus?:string  }

const LabelField = (props:LabelProps)=> <StyledLabel className={props.focus && 'transform'}>{props.text}</StyledLabel>
export default memo(LabelField)

const StyledLabel = styled.label`
    font-size: clamp(1.6rem, 1.6rem, 1.6vw);
`


