import { useCallback, useEffect, useState } from "react"
import useUser from "../../Redux/hooks/useUser"
import { setNote } from "../../Redux/slices/user.slice"

const useNoteFetch = () => {
    const {dispatch} = useUser()

    const handleFetchNotes = useCallback(async() => {
        const note_fetch_url = new Request(process.env.NODE_ENV == 'development' ? process.env.REACT_APP_DEV_NOTE_FETCH! : process.env.REACT_APP_PROD_NOTE_FETCH! )
        const res = await fetch(note_fetch_url, {method:'get', credentials: 'include', headers:{
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