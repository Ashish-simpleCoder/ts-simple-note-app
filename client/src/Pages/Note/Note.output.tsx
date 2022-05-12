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


const NoteOutputContainer = () => {
    useNoteFetch()
    const {search} = useSearch()
    const {user, dispatch} = useUser()
    const [shouldFilterNotes, setShouldFilterNotes] = useState(false)
    const [noteIdToBeFiltered, setNoteIdToBeFiltered] = useState('')

    const {addNewState, setStates, states} = useForm()
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



    const handleDeleteNote = useCallback(async(id: string) => {
        try{
            const res = await fetch(`http://localhost:5000/api/user/notes/${id}`, {
                credentials: 'include', body: JSON.stringify({BIN: true}),
                method:'delete',
                headers: {'content-type': 'application/json'}
            })
            const data = await res.json()
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }, [])

    const deleteNoteBtnClickHandler = useCallback((e: any) => {
        const doesContains = e.target.classList.contains('note-delete-btn')
        if(doesContains){
            const note_id = e.target.parentElement.parentElement.id
            handleDeleteNote(note_id)
            setNoteIdToBeFiltered(note_id)
            setShouldFilterNotes(true)
        }
    }, [])
    useNoteClickListener({run: user.notes?.length != 0, handler: deleteNoteBtnClickHandler, element: document.querySelector('.notes-output-section')})


    useEffect(() => {
        if(shouldFilterNotes){
            dispatch(deleteNote(noteIdToBeFiltered))
        }
    }, [noteIdToBeFiltered,shouldFilterNotes])



    return(
        <Wrapper mode='notes-output-section'>
            {
                user.notes?.map(n => <NoteCard note={n} key={n._id} styles={{display: isInSearchResult(n) ? 'flex' : 'none'}}/>)
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