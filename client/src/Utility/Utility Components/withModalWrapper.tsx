import { CSSProperties } from "react"
import styled from "styled-components"

const WithModalWrapper = ({children, style }:
    {children: JSX.Element,  style?: CSSProperties }
) => {
    return(
        <StyledwithModalWrapper role='wrapper' id='wrapper' style={style}>
            {children}
        </StyledwithModalWrapper>
    )
}
export default WithModalWrapper



const StyledwithModalWrapper = styled.div`
    position: fixed;
    inset: 0;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    z-index: 100;
    transition: background 0.5s;
`