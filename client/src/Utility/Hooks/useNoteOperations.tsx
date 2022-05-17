import { useCallback } from "react"

const useNoteOperations = () => {

    const handleDeleteNote = useCallback(async(id: string) => {
        try{
            const delete_note_url = new Request(process.env.NODE_ENV == 'development' ? `${process.env.REACT_APP_DEV_NOTE_DELETE!}${id}` :`${process.env.REACT_APP_PROD_NOTE_DELETE!}${id}` )

            const res = await fetch( delete_note_url, {
                credentials: 'include', body: JSON.stringify({BIN: true}),
                method:'delete',
                headers: {'content-type': 'application/json'}
            })
            const data = await res.json()
            return await data.success
        }catch(err){
            console.log(err)
        }
    }, [])

    const handleUpdateNote = useCallback( async(update_note: Record<any, any>) => {
        try {
            const update_note_url = new Request(process.env.NODE_ENV == 'development' ? `${process.env.REACT_APP_DEV_NOTE_UPDATE!}${update_note._id}` :`${process.env.REACT_APP_PROD_NOTE_UPDATE!}${update_note._id}` )

            const res = await fetch(update_note_url, {
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(update_note),
                credentials: 'include',
                method: 'PATCH'
            })
            const data = await res.json()
            return await data.success
        } catch (error) {
            console.log(error)
        }
    }, [])


    return {handleDeleteNote, handleUpdateNote}
}
export default useNoteOperations