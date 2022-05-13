import { memo, ReactNode } from "react";
import styled, { css } from "styled-components";
import Button from "../../Components/PureComponents/Button";
import useTheme from "../../Redux/hooks/useTheme";
import WithModalWrapper from "../../Utility/Utility Components/withModalWrapper";
import Clr from "./Clr.icon";
import OverlayMenu from "./Overlay.menu";


const EditModal = memo(({children, mode, bg}:{
    children:ReactNode,
    mode?:string,
    bg: string[]
})=>{
    const {theme} = useTheme()

    return(
        <WithModalWrapper>
            <StyledEditModal mode={mode} id='modal' className="edit-modal" style={{background: theme ? bg[1] : bg[0], border:'var(--border)'}}>
                {children}
                <OverlayMenu cn={`note-overlay`}>
                        {/* <If condition={mode == 'note-page'}> */}
                            {/* <Button style={{backgroundColor: 'transparent'}} onClick={toggleColorMenu}><Clr /></Button> */}
                            <Button mode='delete_note_btn' cn='note-delete-btn'>delete</Button>
                        {/* </If> */}
                    </OverlayMenu>
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
                textarea{
                    flex: 1;
                    resize: none;
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