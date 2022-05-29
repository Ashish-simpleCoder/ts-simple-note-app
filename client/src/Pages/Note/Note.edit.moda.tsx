import { memo, ReactNode } from "react";
import styled, { css } from "styled-components";
// import Button from "../../Components/PureComponents/Button";
import { INote } from "../../Inote";
// import useColorMenu from "../../Redux/hooks/useColorMenu";
import useTheme from "../../Redux/hooks/useTheme";
// import { setColorMenu } from "../../Redux/slices/color.menu.slice";
import WithModalWrapper from "../../Utility/Utility Components/withModalWrapper";
// import Clr from "./Clr.icon";
// import OverlayMenu from "./Overlay.menu";


const EditModal = memo(({children, mode, bg, noteToBeEdited}:{
    children:ReactNode,
    mode?:string,
    bg: string[],
    noteToBeEdited: INote
})=>{
    const {theme, dispatch} = useTheme()
    // const {color_menu} = useColorMenu()

    // const toggleColorMenu = useCallback((e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     const {top, left} = e.currentTarget.getBoundingClientRect()
    //     dispatch(setColorMenu({
    //         enable: !color_menu.enable,
    //         item: {_id: noteToBeEdited._id, bg: noteToBeEdited.bg!},
    //         position:{top:top+20+'px', left:left+20+'px'}
    //     }))
    // }, [])

    return(
        <WithModalWrapper>
            <StyledEditModal mode={mode} id='modal' className="edit-modal" style={{background: theme ? bg[1] : bg[0], border:'var(--border)'}}>
                {children}
                {/* <OverlayMenu cn={`note-overlay`}>
                        <Button style={{backgroundColor: 'transparent'}} onClick={toggleColorMenu}><Clr /></Button>
                        <Button mode='delete_note_btn' cn='note-delete-btn'>delete</Button>
                    </OverlayMenu> */}
            </StyledEditModal>
        </WithModalWrapper>
    )
})
export default EditModal


const StyledEditModal = styled.form<{mode?:string}>`
    transition:all 0.3s ease;

    display: var(--display, none);
    top: var(--top, unset);
    left: var(--left, unset);
    width: var(--width, unset);
    height: var(--height, unset);
    transform: var(--transform, unset);
    max-width:50rem;
    max-height: 50rem;


    ${(props)=>{
        switch(props.mode){
            case 'edit_note': return css`
                textarea, input{
                    width:100%;
                    background-color: unset;
                    &:focus{
                        outline: none;
                        background-color: inherit;
                    }
                }
                input{
                    text-align: center;
                    /* font-weight: 600 !important; */
                    color: var(--clr);
                    border-bottom: 1px solid var(--border);
                }
                textarea{
                    flex: 1;
                    resize: none;
                    font-weight: 500;
                }
                flex-direction:column;
                position:absolute;
                align-items:center;
                background:var(--edit-modal-bg);
                border-radius:0.5rem;
            `
        }
    }}
`