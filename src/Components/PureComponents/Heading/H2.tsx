import {memo, ReactNode} from 'react'
import styled from 'styled-components'

const H2 = ({children}: {children: ReactNode}) => {
    return(
        <StyledH2>{children}</StyledH2>
    )
}
export default memo(H2)

const StyledH2 = styled.h2`
    font-size: clamp(2.5rem, 3rem, 3vw);
`
