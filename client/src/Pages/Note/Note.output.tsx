import { memo, useCallback, useEffect, useState } from "react"
import Input from "../../Components/PureComponents/Input"
import Textarea from "../../Components/PureComponents/Textarea"
import Wrapper from "../../Components/PureComponents/Wrapper"
import useSearch from "../../Redux/hooks/useSearch"
import useUser from "../../Redux/hooks/useUser"
import useClickListener from "../../Utility/Hooks/useClickListener"
import useForm from "../../Utility/Hooks/useForm"
import useNoteClickListener from "../../Utility/Hooks/useNote.click.listener"
import useNoteFetch from "../../Utility/Hooks/useNoteFetch"
import useTranformEditModal from "../../Utility/Hooks/useTransformEditModal"
import If from "../../Utility/Utility Components/If"
import NoteCard from "./Note.card"
import EditModal from "./Note.edit.moda"
import useTheme from "../../Redux/hooks/useTheme"
import useDeleteBtnHandler from "./hooks/useDeleteBtn.handler"
import useNoteUpdateHandler from "./hooks/useNoteUpdate.handler"
import useModalEnableHandler from "./hooks/useModalEnable.handler"
import { INote } from "../../Inote"


const NoteOutputContainer = () => {
    useNoteFetch()

    const {search} = useSearch()
    const { user } = useUser()
    const {theme} = useTheme()
    const {addNewState, setStates, states} = useForm()


    const [shouldEnableEditModal, setShouldEnableEditModal] = useState(false)
    const [noteToBeEdited, setNoteToBeEdited] = useState<INote>({_id:'',bg: [''], title: '', body: '',delete: false})


    const isInSearchResult = useCallback((note : INote) =>{
        if(search == undefined) return true
        return note.title.trim().toLowerCase().includes(search.toLowerCase()) || note.body.trim().toLowerCase().includes(search.toLowerCase())
    },[search])


    const enableNoteEditModalHandler = useModalEnableHandler(setShouldEnableEditModal, setNoteToBeEdited)
    useNoteClickListener({element: document.querySelector('.notes-output-section'), handler: enableNoteEditModalHandler, run: user.notes?.length != 0})
    useTranformEditModal({note_id: noteToBeEdited._id })

    useEffect(() => {
        document.documentElement.classList.toggle('hide-overflow', shouldEnableEditModal)
        let timer: NodeJS.Timer

        if(noteToBeEdited._id && !noteToBeEdited.title){
            user.notes?.forEach(n => {
                if(n._id == noteToBeEdited._id){
                    setStates({title: n.title, body: n.body})
                    setNoteToBeEdited(n)
                }
            })
        }

        if(!noteToBeEdited._id){
            const modal_transition_time = 400
            timer = setTimeout(() => setShouldEnableEditModal(false), modal_transition_time)
        }

        return () => clearTimeout(timer)
    }, [noteToBeEdited, shouldEnableEditModal])



    const noteUpdateHandler = useNoteUpdateHandler( setNoteToBeEdited )
    useClickListener({ element: document, handler: () => noteUpdateHandler(noteToBeEdited) , run: !!noteToBeEdited._id })


    // for syncing the NoteToBeEdited with states values
    // because i also want the _id, bg  attributes of the note
    useEffect(() => {
        setNoteToBeEdited(v => ({...v, ...states}))
    }, [states])


    const deleteNoteBtnClickHandler = useDeleteBtnHandler(setShouldEnableEditModal)
    useNoteClickListener({run: user.notes?.length != 0 , handler: deleteNoteBtnClickHandler, element: document.querySelector('.notes-output-section')})



    return(
        <Wrapper mode='notes-output-section'>
            {
                user.notes?.map(n => <NoteCard note={n} key={n._id} styles={{display: isInSearchResult(n) ? 'flex' : 'none', backgroundColor: theme ? n.bg[1] : n.bg[0]}}/>)
            }
            <If condition={shouldEnableEditModal}>
                <EditModal mode="edit_note" bg={noteToBeEdited.bg}>
                    <Input {...addNewState({name: 'title', placeholder: 'update title',  state: 'title'})} />
                    <Textarea {...addNewState({name: 'body', placeholder: 'update body',  state: 'body'})} />
                </EditModal>
            </If>
        </Wrapper>
    )
}
export default memo(NoteOutputContainer)