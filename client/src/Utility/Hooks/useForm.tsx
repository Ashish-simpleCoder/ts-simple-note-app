import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useCallback, useEffect, useState } from "react"
import Form from '../../Components/PureComponents/Form'
import FormGroup from "../../Components/Journal Components/FormGroup/Form.group"
import FormLabel from "../../Components/Journal Components/FormGroup/Form.label"
import { setLogin } from "../../Redux/slices/user.slice"
import { useDispatch } from "react-redux"


const useForm = () =>{
    const [states, setStates] = useState<Record<any, any>>({})
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(Array())
    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [controller] = useState(new AbortController())
    const dispatch = useDispatch()



    const handleSubmit = useCallback( async(e: FormEvent<HTMLFormElement>, url: RequestInfo, setIsDisabled: Dispatch<SetStateAction<boolean>>) => {
        e.preventDefault()
        try{
            setIsDisabled(true)
            setLoading(true)

            const res = await fetch(url,{
                signal: controller.signal,
                body: JSON.stringify(states),
                method:'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' }
            })
            const data = await res.json()
            // console.log(data)


            // if login and registration is success
            data['_id'] &&  dispatch(setLogin(data['email']))

            // if error occurs
            'errors' in data && setErrors(data['errors'])
            'error' in data && setError(data['error'])

        }catch(err){
            // console.log(err)
            setErrors(Array(err))

        }finally{
            setIsDisabled(false)
            setLoading(false)

        }
    }, [states])

    const clearErrors = useCallback(() => setErrors([]), [])
    const clearError = useCallback(() => setError(''), [])

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if(errors.length != 0){
            timeout = setTimeout(() => clearErrors(), 4000)
        }
        return () => clearTimeout(timeout)
    }, [errors])

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if(error){
            timeout = setTimeout(() => clearError(), 4000)
        }
        return () => clearTimeout(timeout)
    }, [error])


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

    return { addNewState, setStates, states, Form, FormGroup, FormLabel, errors, loading, handleSubmit, disabled, setDisabled, error }
}
export default useForm