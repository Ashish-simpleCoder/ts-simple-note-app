import { memo, useCallback } from "react"
import useTheme from "../../Redux/hooks/useTheme"



const ColorBox = ({clr, handleClick}:{clr:any, handleClick: (e: any, color:string, clr:any) => Promise<void>})=>{
    // const clr_name = Object.keys(clr)
    const {theme} = useTheme()
    const color = clr[Object.keys(clr)[0]][theme ? 1 : 0]
    const handleColorSubmit = useCallback((e:any) => handleClick(e, color, clr), [clr, color, handleClick])

    return <div style={{background:color,width:'3rem',height:'3rem',borderRadius:'50%'}}  onClick={handleColorSubmit}></div>
}

export default memo(ColorBox)