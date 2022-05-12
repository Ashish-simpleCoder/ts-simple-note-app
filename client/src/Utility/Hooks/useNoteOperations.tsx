import { useCallback } from "react"

const useNoteOperations = () => {

    const handleDeleteNote = useCallback(async(id: string) => {
        try{
            const res = await fetch(`http://localhost:5000/api/user/notes/${id}`, {
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
            const res = await fetch(`http://localhost:5000/api/user/notes/${update_note._id}`, {
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