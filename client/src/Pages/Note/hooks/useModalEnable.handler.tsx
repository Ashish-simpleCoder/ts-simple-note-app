import { Dispatch, SetStateAction, useCallback } from "react"
import { INote } from "../../../Inote"


const useModalEnableHandler = (setShouldEnableEditModal: Dispatch<SetStateAction<boolean>>, setNoteToBeEdited: Dispatch<SetStateAction<INote>>) => {


    const handler = useCallback((e: any) => {
        const isNoteClicked = e.target.classList.contains('note') | e.target.classList.contains('note-title') | e.target.classList.contains('note-body')
        if(isNoteClicked){
            const note_id = e.target.parentElement.parentElement.id
            setNoteToBeEdited(v => ({...v, _id: note_id}))
            setShouldEnableEditModal(true)
        }
    }, [])

    return handler
}
export default useModalEnableHandler