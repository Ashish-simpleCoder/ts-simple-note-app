import { memo, useCallback, useEffect, useState } from "react"
import Wrapper from "../../Components/PureComponents/Wrapper"
import useSearch from "../../Redux/hooks/useSearch"
import useUser from "../../Redux/hooks/useUser"
import { deleteNote } from "../../Redux/slices/user.slice"
import useNoteClickListener from "../../Utility/Hooks/useNote.click.listener"
import useNoteFetch from "../../Utility/Hooks/useNoteFetch"
import NoteCard from "./Note.card"


const NoteOutputContainer = () => {
    useNoteFetch()
    const {search} = useSearch()
    const {user, dispatch} = useUser()
    const [shouldFilterNotes, setShouldFilterNotes] = useState(false)
    const [noteIdToBeFiltered, setNoteIdToBeFiltered] = useState('')

    const isInSearchResult = useCallback((note : INote) =>{
        if(search == undefined) return true
        return note.title.trim().toLowerCase().includes(search.toLowerCase())  || note.body.trim().toLowerCase().includes(search.toLowerCase())
    },[search])



    const enableNoteEditModal = useCallback((e: any) => {
        const doesContains = e.target.classList.contains('note') | e.target.classList.contains('note-title') | e.target.classList.contains('note-body')
        if(doesContains){
            const parentElement = e.target.parentElement.parentElement
            parentElement.style.opacity = '0'
        }
    }, [])
    useNoteClickListener({run: user.notes?.length != 0, handler: enableNoteEditModal, element: document.querySelector('.notes-output-section')})


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
        </Wrapper>
    )
}
export default memo(NoteOutputContainer)