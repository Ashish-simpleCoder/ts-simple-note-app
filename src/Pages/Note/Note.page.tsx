import { memo } from "react"
import NoteInput from "./Note.input"
import NoteOutput from "./Note.output"

const Note = () => {
    return(
        <>
            <NoteInput />
            <NoteOutput />
        </>
    )
}
export default memo(Note)