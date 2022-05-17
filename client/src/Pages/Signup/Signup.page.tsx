import {FormEvent, lazy, memo, useCallback, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../Components/PureComponents/Button'
import H3 from '../../Components/PureComponents/H3'
import Input from '../../Components/PureComponents/Input'
import Wrapper from '../../Components/PureComponents/Wrapper'
import useUser from '../../Redux/hooks/useUser'
import EmailSvg from '../../Svg/Email.svg'
import PasswordSvg from '../../Svg/Password.svg'
import useForm from '../../Utility/Hooks/useForm'
import useLoginValidations from '../../Utility/Hooks/useLoginValidations'
import useMediaQuery from '../../Utility/Hooks/useMediaQuery'
import If from '../../Utility/Utility Components/If'
import WithFetchUserHook from '../../Utility/Utility Components/WithFetchUserHook'
import WithSuspense from '../../Utility/Utility Components/WithSuspense'
import checkCapital from '../../Utility/Utility Functions/checkCapital'
import checkCharLength from '../../Utility/Utility Functions/checkCharLength'
import checkNumber from '../../Utility/Utility Functions/checkNumber'
import checkSmall from '../../Utility/Utility Functions/checkSmall'
// import ValidationBox from './ValidationBox'
const ValidationBox = lazy(() => import("./ValidationBox" /* webpackChunkName: 'ValidationBox' */))


const MiniValidationBox = lazy(() => import('./MiniValidationBox' /* webpackChunkName: 'MiniValidationBox' */))
const ErrorBox = lazy(() => import('../../Components/Journal Components/ErrorBox' /* webpackChunkName: 'ErrorBox' */))



const Signup = () => {
    const {user} = useUser()
    const navigate = useNavigate()
    const {addNewState, setStates, states, Form, FormGroup, FormLabel, loading , handleSubmit, errors} = useForm()
    const {isDisabled, validations, setValidations, setIsDisabled} = useLoginValidations({states, mode:'signup'})


    const [isLargerThan700] = useMediaQuery({width: 700})
    const password_ref:any = useRef<HTMLInputElement>(null)


    const redirectSuccessRegisterToLogin = useCallback(() => navigate('/login'), [])
    useEffect(() => {
        user._id && redirectSuccessRegisterToLogin()
    }, [user._id])


    const updateStates = useCallback((value: string) => {
        setStates((v:any) => ({
            ...v,
            'password': value
        }))
    } ,[])


    useEffect(() => {
        const input_password = document.querySelector('#password')
        password_ref.current = input_password

        const validateValue = (value: string) => {
            updateStates(value)
            const [isNumberPrensent,isCapitalPrensent] = [checkNumber(value), checkCapital(value)]
            const [isCharLengthMoreThan4,isLowercasePrensent] = [checkCharLength(value), checkSmall(value)]


            setValidations && setValidations(v => ({
                ...v,
                number: isNumberPrensent,
                capital: isCapitalPrensent,
                lowercase: isLowercasePrensent,
                characters: isCharLengthMoreThan4,
            }))

            if(isNumberPrensent && isCapitalPrensent && isCharLengthMoreThan4 && isLowercasePrensent && states['email'] != ''){
                setIsDisabled && setIsDisabled(false)
            }else setIsDisabled(true)
        }
        password_ref.current?.addEventListener('input', (e:any) => validateValue(e.target.value))
        return () => password_ref.current?.removeEventListener('input', (e:any) => validateValue(e.target.value))
    }, [])

    useEffect(() => {
        if(validations && validations.capital && validations.characters && validations.lowercase && validations.number && states['email']){
            setIsDisabled(false)
        }else setIsDisabled(true)
    },[states['email']])

    const signup_url = new Request(process.env.NODE_ENV == 'development' ? process.env.REACT_APP_DEV_SIGNUP! : process.env.REACT_APP_PROD_SIGNUP! )
    const handleRegister = (e: FormEvent<HTMLFormElement>) => handleSubmit(e, signup_url, setIsDisabled)



    return(
        <Wrapper mode='sign_form_container'>
            <Form mode='register' onSubmit={handleRegister}>
                <H3>Create an account</H3>
                <FormGroup>
                    <FormLabel text='email'></FormLabel>
                    <EmailSvg />
                    <Input {...addNewState({state: 'email', name: 'email', type: 'email'})}/>
                    <div className="utility focus-border"></div>
                    <div className="invalid"></div>
                </FormGroup>

                <FormGroup>
                    <FormLabel text='Password'></FormLabel>
                    <PasswordSvg />
                    <If condition={!isLargerThan700}>
                        <WithSuspense Comp={() => <MiniValidationBox validations={validations!} />} />
                    </If>
                    <Input {...addNewState({state: 'password', name: 'password', id: 'password', type: 'password'})} />
                    <div className="utility focus-border"></div>
                </FormGroup>

                <If condition={errors.length != 0}>
                    <WithSuspense Comp={() => <ErrorBox errors={errors}/>}></WithSuspense>
                </If>

                <Button mode='login_form_btn' isDisabled={isDisabled} loader={loading}>Signup</Button>
            </Form>

            { isLargerThan700 && ( <><hr style={{transform:'rotate(180deg)',opacity: '0.1'}}/>
                <WithSuspense Comp={() => <ValidationBox validations={validations!}/>} />
                </>) }
        </Wrapper>
    )
}
export default memo(() => <WithFetchUserHook><Signup /></WithFetchUserHook>)