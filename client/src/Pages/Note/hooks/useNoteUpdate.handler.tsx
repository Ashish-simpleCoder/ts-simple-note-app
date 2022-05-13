import { Dispatch, SetStateAction, useCallback } from "react"
import { useDispatch } from "react-redux"
import { INote } from "../../../Inote"
import { updateNote } from "../../../Redux/slices/user.slice"
import useNoteOperations from "../../../Utility/Hooks/useNoteOperations"

const useNoteUpdateHandler = ( setNoteToBeEdited: Dispatch<SetStateAction<INote>> ) => {
    const {handleUpdateNote} = useNoteOperations()
    const dispatch = useDispatch()

    const handler = useCallback(async( updated_note: Record<any, any> ) => {
        const isUpdated = await handleUpdateNote(updated_note)
        if(isUpdated) {
            setNoteToBeEdited(({ _id: '', title: '', body: '', bg: [''], delete: false}))
            dispatch(updateNote(updated_note))
        }
    }, [])

    return handler
}
export default useNoteUpdateHandler