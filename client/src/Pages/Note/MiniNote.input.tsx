import HTMLReactParser from "html-react-parser"
import { lazy, useCallback, useEffect, useState } from "react"
import styled, { css } from "styled-components"
import Button from "../../Components/PureComponents/Button"
import If from "../../Utility/Utility Components/If"
import WithSuspense from "../../Utility/Utility Components/WithSuspense"

const NoteInput = lazy(() => import('./Note.input' /* webpackChunkName: 'NoteInput' */))


const MiniNoteInput = () => {
    const [shouldOpenMiniNoteInput, setOpenMiniInput] = useState(false)

    const handleOpenMiniInput = useCallback(() => setOpenMiniInput(v => !v), [])


    useEffect(() => {
        document.documentElement.classList.toggle('hide-overflow', shouldOpenMiniNoteInput)
    }, [shouldOpenMiniNoteInput])


    return(
        <StyledMiniNote expand={shouldOpenMiniNoteInput}>
            <If condition={shouldOpenMiniNoteInput}>
                <WithSuspense Comp={() => <NoteInput />}/>
            </If>
            <Button
                cn='open'
                onClick={handleOpenMiniInput}
                style={{backgroundColor: 'green', borderRadius: '0.5rem',transform: 'scale(1.5)', color: 'white'}}
            >
                { shouldOpenMiniNoteInput ? HTMLReactParser("&#10005;") : HTMLReactParser("&#43;") }
            </Button>
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