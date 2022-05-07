import { memo } from "react"
import styled from "styled-components"

const Img = ({src, alt, width}: {src: string, alt?:string, width?: any}) => {
    return(
        <StyledImg src={src} alt={alt}  width={width}/>
    )
}
export default memo(Img)

const StyledImg = styled.img<{width?: string}>`
    width: ${({width}) => width};
`