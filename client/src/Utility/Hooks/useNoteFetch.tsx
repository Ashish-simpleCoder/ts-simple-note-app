import { useCallback, useEffect, useState } from "react"
import useUser from "../../Redux/hooks/useUser"
import { setNote } from "../../Redux/slices/user.slice"

const useNoteFetch = () => {
    const {dispatch} = useUser()

    const handleFetchNotes = useCallback(async() => {
        const res = await fetch('http://localhost:5000/api/user/notes', {method:'get', credentials: 'include', headers:{
            'Content-Type': 'application/json'
        }})
        const data = await res.json()
        if(data.notes){
            dispatch(setNote(data.notes))
        }
    }, [])

    useEffect(() => {
        handleFetchNotes()
    }, [])
}
export default useNoteFetch