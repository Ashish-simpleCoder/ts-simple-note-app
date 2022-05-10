import { memo, useCallback } from "react"
import Wrapper from "../../Components/PureComponents/Wrapper"
import useSearch from "../../Redux/hooks/useSearch"
import useUser from "../../Redux/hooks/useUser"
import useNoteClickListener from "../../Utility/Hooks/useNote.click.listener"
import useNoteFetch from "../../Utility/Hooks/useNoteFetch"
import NoteCard from "./Note.card"


const NoteOutputContainer = () => {
    useNoteFetch()
    const {search} = useSearch()
    const {user} = useUser()

    const isInSearchResult = useCallback((note : INote) =>{
        if(search == undefined) return true
        return note.title.trim().toLowerCase().includes(search.toLowerCase())  || note.body.trim().toLowerCase().includes(search.toLowerCase())
    },[search])

    const handler = useCallback((e: any) => {
        const doesContains = e.target.classList.contains('note') | e.target.classList.contains('note-title') | e.target.classList.contains('note-body') |
        e.target.classList.contains('note-delete-btn')
        console.log(e.target.nodeName)
        if(doesContains){
            const parentElement = e.target.parentElement.parentElement
            parentElement.style.opacity = '0'
        }
    }, [])
    useNoteClickListener({run: user.notes?.length != 0, handler, element: document.querySelector('.notes-output-section')})



    return(
        <Wrapper mode='notes-output-section'>
            {
                user.notes?.map(n => <NoteCard note={n} key={n._id} styles={{display: isInSearchResult(n) ? 'flex' : 'none'}}/>)
            }
        </Wrapper>
    )
}
export default memo(NoteOutputContainer)