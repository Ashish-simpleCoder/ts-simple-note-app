import { useEffect } from "react"
import Button from "../../Components/PureComponents/Button"
import Input from "../../Components/PureComponents/Input"
import Textarea from "../../Components/PureComponents/Textarea"
import Wrapper from "../../Components/PureComponents/Wrapper"
import useForm from "../../Utility/Hooks/useForm"


const NoteInput = () => {
    const {addNewState, disabled, setDisabled, states} = useForm()

    const TitleField = 'title'
    const BodyField = 'body'

    useEffect(() => {
        if(!states[TitleField] || !states[BodyField]){
            setDisabled(true)
        }else setDisabled(false)
    }, [states])


    return(
        <Wrapper mode='create_note_container'>
            <Input {...addNewState({state:TitleField, name:'title', placeholder: 'title...' })} />
            <Textarea {...addNewState({state: BodyField, name:'body', placeholder: 'your notes...' })} />
            <Button isDisabled={disabled} mode='create_note_btn'>Create new note.</Button>
        </Wrapper>
    )
}
export default NoteInput