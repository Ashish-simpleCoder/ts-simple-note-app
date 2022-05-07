import { ReactNode } from "react"
import styled from "styled-components"

const OverlayMenu = ({children, cn}: {children:ReactNode, cn?: string}) => {

    return(
        <StyledMenu className={cn}>{children}</StyledMenu>
    )
}
export default OverlayMenu


const StyledMenu = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:row;
`