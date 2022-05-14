import { memo } from "react"
import styled from "styled-components"


type LoaderProps = {px?: number, py?: number, w?: number, h?: string}

const Loader = (props: LoaderProps) => {
    const {py,px,w,h} = props

   return(
      <StyledLoader py={py} px={px} w={w} h={h}>
         <div className="circle c1"></div>
         <div className="circle c2"></div>
      </StyledLoader>
   )
}
export default memo(Loader)

const StyledLoader = styled.div<{px?: number, py?: number, w?: number, h?: string}>`
   height:100%;
   position:relative;
   display:flex;
   align-items:center;
   justify-content:center;
   text-align:center;

   .circle{
      position:absolute;
      width:${props=>props.w ? props.w : '2rem'};
      height:${props=>props.h ? props.h : '2rem'};
      border-radius:50%;
      border:clamp(0.3rem, 0.5rem,0.5vw) solid transparent;
      border-top-color:purple;
      animation: animate_loaders 1s linear infinite;
   }

   .c2{
      border-bottom-color: red;
      border-top-color:transparent;
   }


   @keyframes animate_loaders{
      0%{
         border-width: clamp(0.3rem, 0.5rem, 0.5vw);
         transform: rotate(0);
      }50%{
         border-width: clamp(0.1rem,0.2rem,0.2vw);
         transform: rotate(180deg);
      }100%{
         border-width: clamp(0.3rem, 0.5rem, 0.5vw);
         transform: rotate(360deg);
      }
   }
`