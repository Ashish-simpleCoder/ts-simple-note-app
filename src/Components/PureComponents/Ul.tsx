import { memo, ReactNode } from "react"
import styled, { CSSProperties } from "styled-components"

const Ul = ({children, styles}: {children: ReactNode, styles?: CSSProperties}) => {
    return(
        <StyledUl style={styles}>
            {children}
        </StyledUl>
    )
}
export default memo(Ul)

const StyledUl = styled.ul`
    list-style: none;
    /* height: 100%; */
    gap: 1rem;
    display: flex;
    flex-direction: column;
    /* padding: 0; */

    @media (min-width: 700px){
        gap: 4rem;

    }

    li{
        display: flex;
        align-items: center;
        svg{
            margin-inline-end: 1rem;
        }
    }
`