import { lazy, memo, useCallback, useState } from "react"
import Button from "../../Components/PureComponents/Button"
import useMediaQuery from "../../Utility/Hooks/useMediaQuery"
import If from "../../Utility/Utility Components/If"
import WithAuthUser from "../../Utility/Utility Components/WithAuthUser"
import WithSuspense from "../../Utility/Utility Components/WithSuspense"
import NoteOutput from "./Note.output"

const NoteInput = lazy(() => import('./Note.input' /* webpackChunkName: 'NoteInput' */))
const MiniNoteInput = lazy(() => import('./MiniNote.input' /* webpackChunkName: 'MiniNoteInput' */))


const Note = () => {
    const [isLargerThan700px] = useMediaQuery({width: 700})
    // const [openMiniInput, setOpenMiniInput] = useState(false)

    // const handleOpenMiniInput = useCallback(() => setOpenMiniInput(v => !v), [])


    return(
        <>
           <If condition={isLargerThan700px}>
                <WithSuspense Comp={() => <NoteInput />}/>
           </If>
           <If condition={!isLargerThan700px}>
                <WithSuspense Comp={() => <MiniNoteInput />}/>
                {/* <Button  cn='open-miniinput-btn' onClick={handleOpenMiniInput}>&#43;</Button> */}
           </If>
            <NoteOutput />
        </>
    )
}
export default memo(() => <WithAuthUser><Note /></WithAuthUser>)