import { CSSProperties, memo, ReactNode } from "react"
import styled, { css } from "styled-components"

const Span = ({children, style, cn, bg}: SpanPropType) => {
    const bg_clr = bg ? `#${Math.random().toString(16).slice(2,8)}` : ''

    return(
        <StyledSpan style={style} className={cn} bg_clr={bg_clr} >{children}</StyledSpan>
    )
}
export default memo(Span)

interface SpanPropType {
    children?: ReactNode
    style?: CSSProperties,
    cn?: string,
    bg?: boolean
}

const StyledSpan = styled.span<{bg_clr?: string}>`

${({bg_clr}) => {
    if(bg_clr){
        return css`
            background: ${bg_clr};
        `
    }
}}

`