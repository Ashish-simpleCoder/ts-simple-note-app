import { lazy, memo  } from "react"
import useColorMenu from "../../Redux/hooks/useColorMenu"
import useUser from "../../Redux/hooks/useUser"
import { setColorMenu } from "../../Redux/slices/color.menu.slice"
import useClickListener from "../../Utility/Hooks/useClickListener"
import useMediaQuery from "../../Utility/Hooks/useMediaQuery"
import If from "../../Utility/Utility Components/If"
import WithAuthUser from "../../Utility/Utility Components/WithAuthUser"
import WithSuspense from "../../Utility/Utility Components/WithSuspense"
import ColorList from "./Color.list"
import NoteOutput from "./Note.output"


const NoteInput = lazy(() => import('./Note.input' /* webpackChunkName: 'NoteInput' */))
const MiniNoteInput = lazy(() => import('./MiniNote.input' /* webpackChunkName: 'MiniNoteInput' */))


const Note = () => {
    const [isLargerThan700px] = useMediaQuery({width: 700})
    const {color_menu, dispatch} = useColorMenu()

    // useClickListener({ element: document, handler: () => noteUpdateHandler(noteToBeEdited) , run: !!noteToBeEdited._id })
    useClickListener({
        element: document,
        handler: () => dispatch(setColorMenu({
            enable: !color_menu.enable,
            item: {_id: '', bg: ''},
            position:{top: '', left:  ''}
        })),
        run: color_menu.enable
    })


    return(
        <>
           <If condition={isLargerThan700px}>
                <WithSuspense Comp={() => <NoteInput />}/>
           </If>
           <If condition={!isLargerThan700px}>
                <WithSuspense Comp={() => <MiniNoteInput />}/>
           </If>

            <NoteOutput />

            <If condition={color_menu.enable}>
                <ColorList styles={color_menu.position}/>
            </If>
        </>
    )
}
export default memo(() => <WithAuthUser><Note /></WithAuthUser>)