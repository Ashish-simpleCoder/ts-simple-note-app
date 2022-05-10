import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Button from "../../Components/PureComponents/Button"
import Input from "../../Components/PureComponents/Input"
import Textarea from "../../Components/PureComponents/Textarea"
import Wrapper from "../../Components/PureComponents/Wrapper"
import { createNote } from "../../Redux/slices/user.slice"
import useForm from "../../Utility/Hooks/useForm"


const NoteInput = () => {
    const {addNewState, disabled, setDisabled, states, loading} = useForm()
    const dispatch = useDispatch()
    const [shouldAddNewNote, setShouldAddNewNote] = useState(false)
    const [newNoteToBeAdded, setNewNoteToBeAdded] = useState({_id:'',bg: [''], title: '', body: '',delete: false})

    const TitleField = 'title'
    const BodyField = 'body'


    useEffect(() => {
        if(!states[TitleField] || !states[BodyField]){
            setDisabled(true)
        }else setDisabled(false)
    }, [states])

    const handleCreateNote = useCallback(async(states: Record<any, any>) => {
        try{
            const res = await fetch('http://localhost:5000/api/user/note', {method:'post', credentials: 'include',body: JSON.stringify(states),headers:{
                'Content-Type': 'application/json'
            }})
            const data = await res.json()
            if(data.success){
                setNewNoteToBeAdded(data.note)
                setShouldAddNewNote(true)
            }
        }catch(err){
            console.log('err' + err)
        }
    }, [])

    useEffect(() => {
        if(shouldAddNewNote){
            dispatch(createNote(newNoteToBeAdded))
            setShouldAddNewNote(false)
        }
    }, [ newNoteToBeAdded, shouldAddNewNote])


    return(
        <Wrapper mode='create_note_container'>
            <Input {...addNewState({state:TitleField, name:'title', placeholder: 'title...' })} />
            <Textarea {...addNewState({state: BodyField, name:'body', placeholder: 'your notes...' })} />
            <Button isDisabled={disabled} loader={loading} onClick={() => handleCreateNote(states)} mode='create_note_btn'>Create new note.</Button>
        </Wrapper>
    )
}
export default NoteInput