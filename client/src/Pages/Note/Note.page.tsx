import { memo } from "react"
import WithAuthUser from "../../Utility/Utility Components/WithAuthUser"
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
export default memo(() => <WithAuthUser><Note /></WithAuthUser>)