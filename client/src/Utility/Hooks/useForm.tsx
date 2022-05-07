import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react"
import Form from '../../Components/PureComponents/Form'
import FormGroup from "../../Components/Journal Components/FormGroup/Form.group"
import FormLabel from "../../Components/Journal Components/FormGroup/Form.label"

const useForm = () =>{
    const [states, setStates] = useState<Record<any, any>>({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(false)



    const handleSubmit = useCallback( async(e: FormEvent<HTMLFormElement>, url: RequestInfo) => {
        e.preventDefault()
        try{
            setLoading(true)
            const res = await fetch(url,{
                body: JSON.stringify(states),
                method:'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            console.log(data)
        }catch(err){
            console.log(err)
            // setError(String(err))
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

    return { addNewState, setStates, states, Form, FormGroup, FormLabel, error, loading, handleSubmit, disabled, setDisabled }
}
export default useForm