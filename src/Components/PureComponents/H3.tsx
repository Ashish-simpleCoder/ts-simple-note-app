import { Children, memo } from "react";
import styled, { CSSProperties } from "styled-components";

const H3 = memo(({children, styles, handleClick, cn}:{children:any, styles?:CSSProperties, handleClick?:() =>void, cn?:string})=>{
    return(
        <StyledH3 style={styles} onClick={handleClick} className={cn}>{children}</StyledH3>
    )
})
export default H3

const StyledH3 = styled.h3<{styles?:CSSProperties}>`
    font-size:2.2rem;
    font-weight: 600;
    /* color: var(--h3-clr); */
`