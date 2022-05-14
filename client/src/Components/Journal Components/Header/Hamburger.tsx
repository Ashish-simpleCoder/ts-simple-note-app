import { memo } from "react"
import styled from "styled-components"


const Hamburger = memo(({onClick} : {onClick :()=>void}) => {
    return(
        <StyledHamburger onClick={onClick}>
            <div className="line l1"></div>
            <div className="line l2"></div>
            <div className="line l3"></div>
        </StyledHamburger>
    )
})
export default memo(Hamburger)


const StyledHamburger = styled.div`
   width:3rem;
   display:flex;
   justify-content:space-between;
   flex-direction:column;
   cursor:pointer;
   z-index:101;
   margin-inline-start: auto;


   .line{
      height:0.2rem;
      background:var(--clr);
      margin-top:0.4rem;
   }
   .l2{
      width:80%;
   }
   .l3{
      width:70%;
   }

   @media (min-width:800px){
      display:none;
   }
`