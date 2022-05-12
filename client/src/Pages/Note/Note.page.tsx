import { lazy, memo  } from "react"
import useUser from "../../Redux/hooks/useUser"
import useMediaQuery from "../../Utility/Hooks/useMediaQuery"
import If from "../../Utility/Utility Components/If"
import WithAuthUser from "../../Utility/Utility Components/WithAuthUser"
import WithSuspense from "../../Utility/Utility Components/WithSuspense"
import NoteOutput from "./Note.output"


const NoteInput = lazy(() => import('./Note.input' /* webpackChunkName: 'NoteInput' */))
const MiniNoteInput = lazy(() => import('./MiniNote.input' /* webpackChunkName: 'MiniNoteInput' */))


const Note = () => {
    const [isLargerThan700px] = useMediaQuery({width: 700})
    const {user} = useUser()



    return(
        <>
           <If condition={isLargerThan700px}>
                <WithSuspense Comp={() => <NoteInput />}/>
           </If>
           <If condition={!isLargerThan700px}>
                <WithSuspense Comp={() => <MiniNoteInput />}/>
           </If>
            <If condition={user.notes?.length != 0}>
                <NoteOutput />
            </If>

        </>
    )
}
export default memo(() => <WithAuthUser><Note /></WithAuthUser>)