import {lazy, memo, useCallback, useEffect, useRef } from 'react'
import Button from '../../Components/PureComponents/Button'
import H3 from '../../Components/PureComponents/H3'
import Input from '../../Components/PureComponents/Input'
import Wrapper from '../../Components/PureComponents/Wrapper'
import EmailSvg from '../../Svg/Email.svg'
import PasswordSvg from '../../Svg/Password.svg'
import useForm from '../../Utility/Hooks/useForm'
import useLoginValidations from '../../Utility/Hooks/useLoginValidations'
import useMediaQuery from '../../Utility/Hooks/useMediaQuery'
import If from '../../Utility/Utility Components/If'
import WithSuspense from '../../Utility/Utility Components/WithSuspense'
import checkCapital from '../../Utility/Utility Functions/checkCapital'
import checkCharLength from '../../Utility/Utility Functions/checkCharLength'
import checkNumber from '../../Utility/Utility Functions/checkNumber'
import checkSmall from '../../Utility/Utility Functions/checkSmall'
// import ValidationBox from './ValidationBox'
const ValidationBox = lazy(() => import("./ValidationBox" /* webpackChunkName: 'ValidationBox' */))


const MiniValidationBox = lazy(() => import('./MiniValidationBox' /* webpackChunkName: 'MiniValidationBox' */))



const Signup = () => {
    const {addNewState, setStates, states, Form, FormGroup, FormLabel } = useForm()
    const {isDisabled, validations, setValidations, setIsDisabled} = useLoginValidations({states, mode:'signup'})

    const [isLargerThan700] = useMediaQuery({width: 700})
    const password_ref:any = useRef<HTMLInputElement>(null)


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



    return(
        <Wrapper mode='sign_form_container'>
            <Form mode='register' >
                <H3>Create an account</H3>
                <FormGroup>
                    <FormLabel text='email'></FormLabel>
                    <EmailSvg />
                    <Input {...addNewState({state: 'email', name: 'email', type: 'email'})}/>
                    <div className="invalid"></div>
                </FormGroup>

                <FormGroup>
                    <FormLabel text='Password'></FormLabel>
                    <PasswordSvg />
                    <If condition={!isLargerThan700}>
                    <WithSuspense Comp={() => <MiniValidationBox validations={validations!} />} />
                    </If>
                    <Input {...addNewState({state: 'password', name: 'password', id: 'password', type: 'password'})} />
                </FormGroup>

                <Button mode='login_form_btn' isDisabled={isDisabled}>Signup</Button>
            </Form>

            { isLargerThan700 && ( <><hr style={{transform:'rotate(180deg)',opacity: '0.1'}}/>
                <WithSuspense Comp={() => <ValidationBox validations={validations!}/>} />
                </>) }
        </Wrapper>
    )
}
export default memo(Signup)