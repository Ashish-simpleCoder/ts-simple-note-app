import { memo, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Button from "../../Components/PureComponents/Button"
import H2 from "../../Components/PureComponents/Heading/H2"
import useUser from "../../Redux/hooks/useUser"
import HeroSvg from "../../Svg/Hero_Svg"
import useFetchUser from "../../Utility/Hooks/useFetchUser"
import HeroLeft from "./Hero.left"

const Hero = () => {
    const {user} = useUser()
    useFetchUser({shouldCheckIfUserLogged: !user.email})

    const navigate = useNavigate()
    const navigateToNotePage = useCallback(() => navigate('/note'), [])


    return(
        <StyledHero >
            <HeroLeft styles={{flexDirection:'column'}}>
                <H2>
                    <span>Save your notes </span>
                    <span className="brand u">easily.</span>
                </H2>
                <Button mode='hero_btn' onClick={navigateToNotePage}>Get Started</Button>
            </HeroLeft>
            <HeroLeft>
                <HeroSvg />
            </HeroLeft>
        </StyledHero>
    )
}
export default memo(Hero)

const StyledHero = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;

    svg{
        max-width: 30rem;
    }


    @media (min-width: 750px){
        height: 100%;
        flex-direction: unset;
        section{
            width:50%;
        }
        svg{
            max-width: unset;
        }
    }
`