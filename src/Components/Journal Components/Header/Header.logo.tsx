import { memo, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Img from "../../PureComponents/Img"
import Span from "../../PureComponents/Span"

const HeaderLogo = () => {
    const navigate = useNavigate()
    const goToHome = useCallback(() => navigate('/'), [])

    return(
        <StyledHeaderLogo >
            <Img src='./img/note.png' width={'2.5rem'}/>
            <h1 onClick={goToHome} style={{cursor:'pointer'}}>
                &nbsp;&nbsp;<Span cn='brand'>Simple</Span>&nbsp;
                <Span>Note</Span>
            </h1>
        </StyledHeaderLogo>
    )
}
export default memo(HeaderLogo)


const StyledHeaderLogo = styled.div`
    display: flex;
    align-items: center;
    height: var(--header-height);

    h1{
        font-size: clamp(1.8rem, 2rem, 2vw);
        font-weight: 600;
    }

    img{
        transform: rotate(-20deg);
    }
`