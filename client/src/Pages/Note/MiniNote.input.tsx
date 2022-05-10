import { lazy, useCallback, useEffect, useState } from "react"
import styled, { css } from "styled-components"
import Button from "../../Components/PureComponents/Button"
import If from "../../Utility/Utility Components/If"

const NoteInput = lazy(() => import('./Note.input' /* webpackChunkName: 'NoteInput' */))


const MiniNoteInput = () => {
    const [openMiniInput, setOpenMiniInput] = useState(false)

    const handleOpenMiniInput = useCallback(() => setOpenMiniInput(v => !v), [])


    useEffect(() => {
        document.documentElement.classList.toggle('hide-overflow', openMiniInput)
    }, [openMiniInput])


    return(
        <StyledMiniNote expand={openMiniInput}>
            <If condition={openMiniInput}>
                <NoteInput />
            </If>
            <Button  cn='open' onClick={handleOpenMiniInput}>&#43;</Button>
        </StyledMiniNote>
    )
}
export default MiniNoteInput



const StyledMiniNote = styled.section<{expand?: boolean}>`
    ${({expand}) => {
        if(expand){
            return css`
                inset: 0;
                position: fixed;
                z-index: 10;
                background-color: var(--body-bg);
                top: var(--header-height);
            `
        }
    }}

    button.open{
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        z-index: 10;
        background-color: var(--note-bg);
    }
`