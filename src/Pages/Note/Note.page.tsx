import { memo } from "react"
import NoteInput from "./Note.input"

const Note = () => {
    return(
        <>
            <NoteInput />
        </>
    )
}
export default memo(Note)