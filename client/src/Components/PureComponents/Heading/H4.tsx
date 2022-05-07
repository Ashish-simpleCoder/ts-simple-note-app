import { Children, memo, ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

const H4 = memo(({children, styles, handleClick, cn}:{children:ReactNode, styles?:CSSProperties, handleClick?:() =>void, cn?:string})=>{
    return(
        <StyledH4 style={styles} onClick={handleClick} className={cn}>{children}</StyledH4>
    )
})
export default H4

const StyledH4 = styled.h4<{styles?:CSSProperties}>`
    font-size:1.6rem;
`