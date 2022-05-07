import { memo, useCallback } from "react"
import Wrapper from "../../Components/PureComponents/Wrapper"
import Note from "../../Note"
import useSearch from "../../Redux/hooks/useSearch"
import NoteCard from "./Note.card"


const NoteOutputContainer = () => {
    const {search} = useSearch()

    const isInSearchResult = useCallback((note : INote) =>{
        if(search == undefined) return true
        return note.title.trim().toLowerCase().includes(search.toLowerCase())  || note.body.trim().toLowerCase().includes(search.toLowerCase())
    },[search])



    return(
        <Wrapper mode='notes-output-section'>
            {
                Note.map(n => <NoteCard note={n} key={n._id} styles={{display: isInSearchResult(n) ? 'flex' : 'none'}}/>)
            }
        </Wrapper>
    )
}
export default memo(NoteOutputContainer)