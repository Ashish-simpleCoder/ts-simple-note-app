import { memo, useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'
import useStore from "../../../Redux/hooks/useStore"
import { TOGGLE_THEME } from "../../../Redux/slices/theme.slice"
import { setLogout } from "../../../Redux/slices/user.slice"
import ToggleThemeIcon from "../../../Svg/ToggleThemeIcon"
import If from "../../../Utility/Utility Components/If"
import asyncWrapper from "../../../Utility/Utility Functions/asyncWrapper"
import AnchorLink from "../../PureComponents/AnchorLink"
import Button from "../../PureComponents/Button"



const Nav = () => {
    const {states, dispatch} = useStore()
    const [shouldLogout, setShouldLogout] = useState(false)

    const navigate = useNavigate()


    const handleLogout = useCallback(async() => {
        const url = new Request('http://localhost:5000/api/user/logout', { credentials: 'include' })
        const res = await fetch(url)
        const data = await res.json()

        data.success && setShouldLogout(true)
    },[])


    useEffect(() => {
        if(shouldLogout){
            dispatch(setLogout())
            navigate('/')
        }
    }, [shouldLogout])


    return(
        <StyledNav note={states.user.notes?.length != 0}>
            <If condition={!states.user.email}>
                <AnchorLink path="/login">Login</AnchorLink>
                <AnchorLink path="/signup">Signup</AnchorLink>
            </If>

            <If condition={states.user.email}>
                <AnchorLink path="/note">Note</AnchorLink>
                <Button cn='red' onClick={handleLogout}>Logout</Button>
            </If>

            <Button cn='svg theme-toggle-btn' onClick={() => dispatch(TOGGLE_THEME())}><ToggleThemeIcon/></Button>
        </StyledNav>
    )
}
export default memo(Nav)

const StyledNav = styled.nav<{note?: boolean}>`
    /* flex: 1; */
    justify-content:space-between;
    display: flex;
    align-items:center;

    @media (min-width: 700px){
        /* --nav-width: 20%;
        max-width: var(--nav-width); */
        /* margin-left: ${({note}) => note && 'auto'}; */
        margin-left: auto;
        gap: 2rem;
    }


    .svg{
        border: none;
        &:hover{
           background-color: unset;
        }
    }
`