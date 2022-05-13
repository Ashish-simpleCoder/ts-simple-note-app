import { Dispatch, SetStateAction, useCallback } from "react"
import { useDispatch } from "react-redux"
import { deleteNote } from "../../../Redux/slices/user.slice"
import useNoteOperations from "../../../Utility/Hooks/useNoteOperations"

const useDeleteBtnHandler = (setShouldEnableEditModal: Dispatch<SetStateAction<boolean>>) => {

    const {handleDeleteNote} = useNoteOperations()
    const dispatch = useDispatch()

    const handler = useCallback(async(e: any) => {
        e.preventDefault()
        const isClickedDeleteBtn = e.target.classList.contains('note-delete-btn')
        if(isClickedDeleteBtn){
            const note_id: string = e.target.parentElement.parentElement.id
            const isDeleted = await handleDeleteNote(note_id)
            if(isDeleted){
                dispatch(deleteNote(note_id))
                setShouldEnableEditModal(false)
            }
        }
    }, [])

    return handler
}
export default useDeleteBtnHandler