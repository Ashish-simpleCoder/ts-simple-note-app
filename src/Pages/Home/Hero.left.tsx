import { CSSProperties, memo, ReactNode } from "react"
import styled from "styled-components"

const Left = ({children, styles}: {children: ReactNode, styles?: CSSProperties}) => {
    return(
        <StyledLeft style={styles}>
            {children}
        </StyledLeft>
    )
}
export default memo(Left)

const StyledLeft = styled.section`
    display:flex;
    align-items: center;
    justify-content: center;
`