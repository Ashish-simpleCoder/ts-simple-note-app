import { lazy, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import If from "../../../Utility/Utility Components/If"
import withModalWrapper from "../../../Utility/Utility Components/withModalWrapper"
import WithSuspense from "../../../Utility/Utility Components/WithSuspense"


const Nav = lazy(() => import('./Nav' /* webpackChunkName: 'Nav' */))

const MiniNav = ({showNav, cn}: {showNav: boolean, cn?: string}) => {

    const mini_ref = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     if(showNav){
    //         console.log('true')
    //         setTimeout(() => {
    //             mini_ref.current?.classList.add('in')
    //             mini_ref.current?.classList.add('visible')
    //         }, 20)
    //     }
    // }, [showNav])
    // useEffect(() => {
    //     if(!showNav){
    //         setTimeout(() => {
    //             mini_ref.current?.classList.remove('in', 'visible')
    //         }, 10)
    // //     }
    // }, [showNav])

    //for useMountTransition
    return(
        <StyledMiniNav className={cn}>
            <WithSuspense Comp={() => <Nav/>} />
        </StyledMiniNav>
    )

    // return(
    //     <StyledMiniNav ref={mini_ref}>
    //         <If condition={showNav}>
    //             <WithSuspense Comp={() => <Nav/>} />
    //         </If>
    //     </StyledMiniNav>
    // )
}
export default MiniNav



const StyledMiniNav = styled.div`
    --width: 50%;
    position: fixed;
    top: 0;
    right: 0;
    width: var(--width);
    z-index: 1000;
    height: 100%;

    --opacity: 0;
    --transform-x: 100%;
    opacity: var(--opacity);
    transform: translateX(var(--transform-x));
    transition: opacity 0.5s ease, transform 0.5s ease;

    @media (max-width: 500px){
        --width: 100%;
        /* width: 100%; */
    }





    nav{
        background-color: var(--form-bg);
        height: calc(100% - var(--header-height));
        transform: translateY(var(--header-height));
        flex-direction: column !important;
        justify-content: flex-start !important;
        padding: 1rem;
    }

    nav a{
        margin: 1rem 0;
        width: 100%;
        text-align: center;
    }

    button.theme-toggle-btn{
        margin-top: auto;
    }
`