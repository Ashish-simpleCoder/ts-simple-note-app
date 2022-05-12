import { memo, ReactNode } from "react";
import styled, { css } from "styled-components";
import Wrapper from "../../Components/PureComponents/Wrapper";
import useTheme from "../../Redux/hooks/useTheme";
import WithModalWrapper from "../../Utility/Utility Components/withModalWrapper";

const EditModal = memo(({children, mode, bg}:{
    children:ReactNode,
    mode?:string,
    bg: string[]
})=>{
    const {theme} = useTheme()
    return(
        <WithModalWrapper>

        {/* <Wrapper mode='edit_note'> */}
            <StyledEditModal mode={mode} id='modal' className="edit-modal" style={{background:theme ? bg[1] : bg[0], border:'var(--border)'}}>
                {children}
            </StyledEditModal>
        {/* </Wrapper> */}
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