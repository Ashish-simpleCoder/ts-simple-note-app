import { CSSProperties, memo, useCallback } from "react"
import styled from "styled-components"
import ColorsArr from "../../Utility/Utility Functions/ColorArr"
import ColorBox from "./Color.box"
import useColorMenu from "../../Redux/hooks/useColorMenu"
import useUser from "../../Redux/hooks/useUser"
import WithModalWrapper from "../../Utility/Utility Components/withModalWrapper"



const ColorList = ({ styles }:{ styles?:CSSProperties})=>{
   const {user} = useUser()
   const {color_menu, dispatch} = useColorMenu()

   const handleClick = useCallback(async(e, color:string, clr) =>{
      e.stopPropagation()
      if(!color_menu?.item) return         //if note edit mode enabled then return
      if(color_menu.item.bg.includes(color)) return      //if user sets the color which is already setted then return

    //   updateNote(`/api/v1/user/notes/${menu?.item._id}`, {...menu.item, bg:clr[Object.keys(clr)[0]]})
    //   const data = await fetchNotes('/api/v1/user/notes')
    //   if(!data?.notes) return

    //   setUser(v=>({...v, notes:data.notes}))    //setting the updated notes from the server to the client
    //   setEditNote((v) => ({...v, bg:clr[Object.keys(clr)[0]]}))     //setting the updated color to the edit modal as well on live
    //   setNoteClrMenu && setNoteClrMenu(v=>({...v, item:{...v.item, bg:clr[Object.keys(clr)[0]]}}))       //also updating the menu state
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