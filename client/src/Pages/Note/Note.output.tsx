import { memo, useCallback } from "react"
import Wrapper from "../../Components/PureComponents/Wrapper"
import useSearch from "../../Redux/hooks/useSearch"
import useUser from "../../Redux/hooks/useUser"
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



    return(
        <Wrapper mode='notes-output-section'>
            {
                user.notes?.map(n => <NoteCard note={n} key={n._id} styles={{display: isInSearchResult(n) ? 'flex' : 'none'}}/>)
            }
        </Wrapper>
    )
}
export default memo(NoteOutputContainer)