import { memo, useCallback, useEffect, useRef, useState } from "react"
import Input from "../../Components/PureComponents/Input"
import Textarea from "../../Components/PureComponents/Textarea"
import Wrapper from "../../Components/PureComponents/Wrapper"
import useSearch from "../../Redux/hooks/useSearch"
import useUser from "../../Redux/hooks/useUser"
import { deleteNote, updateNote } from "../../Redux/slices/user.slice"
import useClickListener from "../../Utility/Hooks/useClickListener"
import useForm from "../../Utility/Hooks/useForm"
import useNoteClickListener from "../../Utility/Hooks/useNote.click.listener"
import useNoteFetch from "../../Utility/Hooks/useNoteFetch"
import useTranformEditModal from "../../Utility/Hooks/useTransformEditModal"
import If from "../../Utility/Utility Components/If"
import NoteCard from "./Note.card"
import EditModal from "./Note.edit.moda"
import useNoteOperations from '../../Utility/Hooks/useNoteOperations'


const NoteOutputContainer = () => {
    useNoteFetch()
    const {addNewState, setStates, states} = useForm()
    const {search} = useSearch()
    const {user, dispatch} = useUser()
    const {handleDeleteNote} = useNoteOperations()


    const [shouldEnableEditModal, setShouldEnableEditModal] = useState(false)
    const [noteToBeEdited, setNoteToBeEdited] = useState<Record<any, any>>({_id:'',bg: [''], title: '', body: '',delete: false})



    const isInSearchResult = useCallback((note : INote) =>{
        if(search == undefined) return true
        return note.title.trim().toLowerCase().includes(search.toLowerCase())  || note.body.trim().toLowerCase().includes(search.toLowerCase())
    },[search])



    const enableNoteEditModal = useCallback((e: any) => {
        const doesContains = e.target.classList.contains('note') | e.target.classList.contains('note-title') | e.target.classList.contains('note-body')
        if(doesContains){
            const parentElement = e.target.parentElement.parentElement
            setNoteToBeEdited(v => ({...v, _id: parentElement.id}))
            setShouldEnableEditModal(true)
        }
    }, [])
    useNoteClickListener({run: user.notes?.length != 0, handler: enableNoteEditModal, element: document.querySelector('.notes-output-section')})


    useTranformEditModal({id: noteToBeEdited._id })
    const handler = useCallback( async(noteToBeEdited: Record<any, any>) => {
        const res = await fetch(`http://localhost:5000/api/user/notes/${noteToBeEdited._id}`, {
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(noteToBeEdited),
            credentials: 'include',
            method: 'PATCH'
        })
        const data = await res.json()
        if(data.success){
            setNoteToBeEdited(v => ({...v, _id: ''}))
            dispatch(updateNote(noteToBeEdited))
        }

    }, [])
    useClickListener({ element: document, handler: () => handler(noteToBeEdited) , run: !!noteToBeEdited._id })
    useEffect(() => {
        if(noteToBeEdited._id && !noteToBeEdited.title){
            document.documentElement.classList.toggle('hide-overflow', shouldEnableEditModal)
            user.notes?.forEach(n => {
                if(n._id == noteToBeEdited._id){
                    setStates({title: n.title, body: n.body})
                    setNoteToBeEdited(n)
                    return
                }
            })
        }
        if(!noteToBeEdited._id){
                        // setShouldEnableEditModal(false)
                        setTimeout(() => setShouldEnableEditModal(false), 300)
        }
    }, [noteToBeEdited, shouldEnableEditModal])

    useEffect(() => {
        setNoteToBeEdited(v => ({...v, ...states}))
    }, [states])




    const deleteNoteBtnClickHandler = useCallback(async(e: any) => {
        const isClickedDeleteBtn = e.target.classList.contains('note-delete-btn')
        if(isClickedDeleteBtn){
            const note_id: string = e.target.parentElement.parentElement.id
            const isDeleted = await handleDeleteNote(note_id)
            if(isDeleted){
                dispatch(deleteNote(note_id))
            }
        }
    }, [])
    useNoteClickListener({run: user.notes?.length != 0, handler: deleteNoteBtnClickHandler, element: document.querySelector('.notes-output-section')})




    return(
        <Wrapper mode='notes-output-section'>
            {
                user.notes?.map(n => {
                    if(n.delete) return null
                    return <NoteCard note={n} key={n._id} styles={{display: isInSearchResult(n) ? 'flex' : 'none'}}/>
                })
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