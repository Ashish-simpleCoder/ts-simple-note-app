import { ReactNode } from "react"
import styled from "styled-components"

const Para = ({children, cn}: {children?: ReactNode, cn?: string}) => {
    return (<StyledP className={cn}>{children}</StyledP>)
}
export default Para

const StyledP = styled.p`
    font-size: 1.3rem;
`