import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useCallback, useEffect, useState } from "react"
import Form from '../../Components/PureComponents/Form'
import FormGroup from "../../Components/Journal Components/FormGroup/Form.group"
import FormLabel from "../../Components/Journal Components/FormGroup/Form.label"
import { setLogin } from "../../Redux/slices/user.slice"
import { useDispatch } from "react-redux"
import useSubmit from "./useSubmit"
import {  useNavigate } from "react-router-dom"


const useForm = () =>{
    const [states, setStates] = useState<Record<any, any>>({})
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(Array())
    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(false)
    const dispatch = useDispatch()

    const {handleSubmit: handleFormSubmitUtil} = useSubmit()
    const navigate = useNavigate()


    const handleSubmit = useCallback( async(props:{e: FormEvent<HTMLFormElement>, url: string, setIsDisabled: Dispatch<SetStateAction<boolean>> }) => {
        const {e, url, setIsDisabled } = props
        e.preventDefault()
        try{
            setIsDisabled(true)
            setLoading(true)

            const data = await handleFormSubmitUtil({
                url, body: states,
                method: 'POST'
            })

            data['_id'] && !data['email'] &&  navigate('/login');    // if registration is success
           data['_id'] && dispatch(setLogin(data['email']));    // if login is success

            // if error occurs
            'errors' in data && setErrors(data['errors'])
            'error' in data && setError(data['error'])
        }catch(err){
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
            timeout = setTimeout(clearErrors, 4000)
        }
        return () => clearTimeout(timeout)
    }, [errors])

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if(error){
            timeout = setTimeout(clearError, 4000)
        }
        return () => clearTimeout(timeout)
    }, [error])


    const handleChange = useCallback((value: string, state:string) =>{
        setStates((old:any) => ({
            ...old,
            [state]:value
        }))
    }, [states])


    const addNewState = useCallback(( props : {
        state: string,
        placeholder?: string,
        name?: string,
        id?: string,
        type?: 'email' | 'password' | 'text'
    }) => {
        return {
            value: states[props.state] || '',
            onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleChange(e.target.value, props.state),
            ...props
        }
    }, [states])


    return { addNewState, setStates, states, Form, FormGroup, FormLabel, errors, loading, handleSubmit, disabled, setDisabled, error  }
}
export default useForm