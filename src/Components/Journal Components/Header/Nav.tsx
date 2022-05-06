import { memo, useEffect } from "react"
import styled from 'styled-components'
import useStore from "../../../Redux/hooks/useStore"
import { TOGGLE_THEME } from "../../../Redux/slices/theme.slice"
import ToggleThemeIcon from "../../../Svg/ToggleThemeIcon"
import If from "../../../Utility/Utility Components/If"
import AnchorLink from "../../PureComponents/AnchorLink"
import Button from "../../PureComponents/Button"



const Nav = () => {
    const {states, dispatch} = useStore()


    return(
        <StyledNav >
            <If condition={!states.user.email}>
                <AnchorLink path="/login">Login</AnchorLink>
                <AnchorLink path="/signup">Signup</AnchorLink>
            </If>
            <If condition={states.user.email}>
                <AnchorLink path="/note">Note</AnchorLink>
                <Button cn='red'>Logout</Button>
            </If>
            <Button cn='svg theme-toggle-btn' onClick={() => dispatch({type: TOGGLE_THEME})}><ToggleThemeIcon/></Button>
        </StyledNav>
    )
}
export default memo(Nav)

const StyledNav = styled.nav`
    /* flex: 1; */
    justify-content:space-between;
    display: flex;
    align-items:center;

    @media (min-width: 800px){
        max-width: var(--nav-width);
        --nav-width: 20%;
        margin-left: auto;
    }

    .svg{
        border: none;
        &:hover{
           background-color: unset;
        }
    }
`