import { CSSProperties, memo, useCallback } from "react"
import styled from "styled-components"
import ColorsArr from "../../Utility/Utility Functions/ColorArr"
import ColorBox from "./Color.box"
import useColorMenu from "../../Redux/hooks/useColorMenu"
import useUser from "../../Redux/hooks/useUser"
import WithModalWrapper from "../../Utility/Utility Components/withModalWrapper"
import { setOnlyBg } from "../../Redux/slices/color.menu.slice"
import { changeNoteColor, updateNote } from "../../Redux/slices/user.slice"



const ColorList = ({ styles }:{ styles?:CSSProperties})=>{
   const {user} = useUser()
   const {color_menu, dispatch} = useColorMenu()

   const handleClick = useCallback(async(e, color:string, clr) =>{
      e.stopPropagation()
      if(!color_menu?.item) return         //if note edit mode enabled then return
      if(color_menu.item.bg.includes(color)) return      //if user sets the color which is already setted then return

      const change_clr_url = new Request(process.env.NODE_ENV == 'development' ? `${process.env.REACT_APP_DEV_NOTE_CHANGE_CLR!}${color_menu.item._id}` : `${process.env.REACT_APP_PROD_NOTE_CHANGE_CLR!}${color_menu.item._id}` )
      const res = await fetch(change_clr_url, {
         credentials: 'include',
         method: 'PATCH',
         body: JSON.stringify( { bg: clr[Object.keys(clr)[0]]} ),
         headers: { 'Content-Type': 'application/json'},
      })
      const data = await res.json()
      if(data.success){
         dispatch(changeNoteColor({bg: clr[Object.keys(clr)[0]], _id: color_menu.item._id}))
         dispatch(setOnlyBg(clr[Object.keys(clr)[0]]))
      }
   }, [color_menu ])


   return(
       <WithModalWrapper>
        <StyledColorList className="clr-list" style={styles}>
            { ColorsArr.map((clr:any, i:number)=><ColorBox key={i}  clr={clr} handleClick={handleClick}/>) }
        </StyledColorList>
       </WithModalWrapper>
   )
}
export default memo(ColorList)



const StyledColorList = styled.div`
   display:flex;
   position:fixed;
   flex-direction:row;
   align-items:center;
   justify-content:space-between;
   gap:1rem;
   z-index:3;
   >div{
      cursor:pointer;
   }
`