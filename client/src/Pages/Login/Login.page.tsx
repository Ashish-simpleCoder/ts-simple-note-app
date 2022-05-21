import {memo, useMemo, FormEvent, lazy, useEffect, useCallback } from 'react'
import Button from '../../Components/PureComponents/Button'
import H3 from '../../Components/PureComponents/H3'
import Input from '../../Components/PureComponents/Input'
import EmailSvg from '../../Svg/Email.svg'
import PasswordSvg from '../../Svg/Password.svg'
import useForm from '../../Utility/Hooks/useForm'
import useLoginValidations from '../../Utility/Hooks/useLoginValidations'
import If from '../../Utility/Utility Components/If'
import WithFetchUserHook from '../../Utility/Utility Components/WithFetchUserHook'
import WithSuspense from '../../Utility/Utility Components/WithSuspense'

const ErrorBox = lazy(() => import('../../Components/Journal Components/ErrorBox' /* webpackChunkName: 'ErrorBox' */))


const Login = () => {
    const { addNewState, states, Form, FormGroup, FormLabel, handleSubmit, loading, error} = useForm()
    const {isDisabled, setIsDisabled} = useLoginValidations({states})

    const form_styles = useMemo(() => ({boxShadow:'var(--form-shadow)',transform:'translateY(3rem)'}), [])


    const login_url = process.env.NODE_ENV == 'development' ? process.env.REACT_APP_DEV_LOGIN! : process.env.REACT_APP_PROD_LOGIN!
    const handleLogin = useCallback((e: FormEvent<HTMLFormElement>) => handleSubmit({e, url: login_url, setIsDisabled }), [states])


    useEffect(() => {
        document.title = 'Login'
        return () => {document.title = 'Simple Note App'}
    }, [])

    return(
            <Form mode='login' styles={form_styles} onSubmit={handleLogin}>
                <H3>Login</H3>

                <FormGroup>
                    <FormLabel text='email' />
                    <EmailSvg />
                    <Input {...addNewState({state: 'email', name: 'email', type: 'email'})} />
                    <div className="utility focus-border"></div>
                    <div className="invalid"></div>
                </FormGroup>

                <FormGroup>
                    <FormLabel text='Password' />
                    <PasswordSvg />
                    <Input {...addNewState({state: 'password', name: 'password', type: 'password'})}/>
                    <div className="utility focus-border"></div>
                </FormGroup>

                <If condition={error}>
                    <WithSuspense Comp={() => <ErrorBox error={error} />} />
                </If>
                <Button mode='login_form_btn' isDisabled={isDisabled} loader={loading}>Login</Button>
            </Form>
    )
}
export default memo(() => <WithFetchUserHook><Login /></WithFetchUserHook>)