import { lazy, memo, useCallback, useState } from "react"
import styled from "styled-components"
import useUser from "../../../Redux/hooks/useUser"
import SearchIcon from "../../../Svg/SearchIcon"
import useClickListener from "../../../Utility/Hooks/useClickListener"
import useForm from "../../../Utility/Hooks/useForm"
import useMediaQuery from "../../../Utility/Hooks/useMediaQuery"
import useMountTransition from "../../../Utility/Hooks/useMountTransition"
import If from "../../../Utility/Utility Components/If"
import WithModalWrapper from "../../../Utility/Utility Components/withModalWrapper"
import WithSuspense from "../../../Utility/Utility Components/WithSuspense"
import Input from "../../PureComponents/Input"
import SearchBar from "../SearchBar"
import Hamburger from "./Hamburger"
import HeaderLogo from "./Header.logo"
import MiniNav from "./MiniNav"
const Nav = lazy(() => import('./Nav' /* webpackChunkName: 'Nav' */))
// const MiniNav = lazy(() => import('./MiniNav' /* webpackChunkName: 'mini nav' */))



const Header = () => {
    const [isLargerThan800] = useMediaQuery({width: 800})

    const [showNav, setShowNav] = useState(false)
    const toggleNav = useCallback(() => setShowNav(v => !v), [])


    useClickListener({element: document, handler: () => {
        setShowNav(false)
    }, eventName: 'click', run: showNav} )


    const hasTransitionedIn = useMountTransition({isMounted: showNav, unmountDelay: 500})

    const {user} = useUser()

    const {addNewState, FormGroup} = useForm()




    return(
        <StyledHeader className="px">
            <HeaderLogo/>
            <If condition={user.notes}>
                <FormGroup >
                    <SearchIcon />
                    <Input {...addNewState({state: 'search', name:'search', placeholder: 'search notes...'})}/>
                </FormGroup>
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

    div.in.visible{
        --opacity: 1;
        --transform-x: 0;
    }



`