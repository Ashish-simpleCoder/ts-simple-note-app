import { lazy, memo, useCallback, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import useUser from "../../../Redux/hooks/useUser"
import useClickListener from "../../../Utility/Hooks/useClickListener"
import useMediaQuery from "../../../Utility/Hooks/useMediaQuery"
import useMountTransition from "../../../Utility/Hooks/useMountTransition"
import If from "../../../Utility/Utility Components/If"
import WithModalWrapper from "../../../Utility/Utility Components/withModalWrapper"
import WithSuspense from "../../../Utility/Utility Components/WithSuspense"
import Hamburger from "./Hamburger"
import HeaderLogo from "./Header.logo"
import MiniNav from "./MiniNav"

const Nav = lazy(() => import('./Nav' /* webpackChunkName: 'Nav' */))
const SearchBar = lazy(() => import('../SearchBar' /* webpackChunkName: 'SearchBar' */))
const MiniSearchBar = lazy(() => import( "../Mini.SearchBar" /* webpackChunkName: 'MiniSearchBar' */))
// const MiniNav = lazy(() => import('./MiniNav' /* webpackChunkName: 'mini nav' */))



const Header = () => {
    const [showNav, setShowNav] = useState(false)
    const [shouldDisplaySearchBar, setShouldDisplaySearchBar] = useState(false)

    const toggleNav = useCallback(() => setShowNav(v => !v), [])
    const location = useLocation()

    const [isLargerThan800] = useMediaQuery({width: 800})
    const {user} = useUser()

    const hasTransitionedIn = useMountTransition({isMounted: showNav, unmountDelay: 500})

    useClickListener({
        element: document,
        handler: () => setShowNav(false),
        eventName: 'click', run: showNav
    })


    useEffect(() => {
        setShouldDisplaySearchBar(location.pathname.includes('note'))
    }, [location])


    return(
        <StyledHeader className="px">
            <HeaderLogo/>
            <If condition={shouldDisplaySearchBar && user.notes?.length != 0 && isLargerThan800}>
                <WithSuspense Comp={() => <SearchBar />}></WithSuspense>
            </If>
            <If condition={shouldDisplaySearchBar && user.notes?.length != 0 && !isLargerThan800}>
                <WithSuspense Comp={() => <MiniSearchBar />}></WithSuspense>
            </If>
            <If condition={isLargerThan800}>
                <WithSuspense Comp={Nav} />
            </If>
            <If condition={!isLargerThan800}>
                <Hamburger onClick={toggleNav}/>
                <If condition={showNav || hasTransitionedIn}>
                    {/* <WithSuspense Comp={() => <WithModalWrapper><MiniNav showNav={showNav} /></WithModalWrapper> } /> */}
                    <WithModalWrapper><MiniNav showNav={showNav} cn={`${hasTransitionedIn && 'in'} ${showNav  && 'visible'}`}/></WithModalWrapper>
                </If>
            </If>
        </StyledHeader>
    )
}
export default memo(Header)


const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    background-color: var(--body-bg);

    @media (min-width:700px){
        position:sticky;
        top:0;
        z-index:1;
    }

    div.in.visible{
        --opacity: 1;
        --transform-x: 0;
    }
`