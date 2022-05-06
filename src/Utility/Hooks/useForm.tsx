import { ChangeEvent, useCallback, useState } from "react"
import Form from '../../Components/PureComponents/Form'
import FormGroup from "../../Components/Journal Components/FormGroup/Form.group"
import FormLabel from "../../Components/Journal Components/FormGroup/Form.label"

const useForm = () =>{
    const [states, setStates] = useState({} as any)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = useCallback((fn: Function) => {
        setLoading(true)
        try{
            fn()
        }catch(err){
            setError(String(err))
        }finally{
            setLoading(false)
        }
    }, [states])


    const handleChange = useCallback((value: string, state:string) =>{
        setStates((old:any) => ({
            ...old,
            [state]:value
        }))
    }, [states])


    const addNewState = useCallback(({state, placeholder, name, id,type} : {state:string, placeholder?:string, name?: string, id?:string, type?: 'email' | 'password'}) => {
        return {
            value: states[state] || '',
            onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleChange(e.target.value, state),
            placeholder, name, id, type
        }
    }, [states])

    return { addNewState, setStates, states, Form, FormGroup, FormLabel, error, loading, handleSubmit }
}
export default useForm