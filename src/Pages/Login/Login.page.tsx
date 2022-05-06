import {memo, useMemo } from 'react'
import Button from '../../Components/PureComponents/Button'
import H3 from '../../Components/PureComponents/H3'
import Input from '../../Components/PureComponents/Input'
import EmailSvg from '../../Svg/Email.svg'
import PasswordSvg from '../../Svg/Password.svg'
import useForm from '../../Utility/Hooks/useForm'
import useLoginValidations from '../../Utility/Hooks/useLoginValidations'

const Login = () => {
    const { addNewState, states, Form, FormGroup, FormLabel, handleSubmit } = useForm()
    const {isDisabled} = useLoginValidations({states})

    // const url = useMemo(() => '/user/login', [])

    return(
            <Form mode='login' styles={{boxShadow:'var(--form-shadow)',transform:'translateY(3rem)'}}>
                <H3>Login</H3>
                <FormGroup>
                    <FormLabel text='email'></FormLabel>
                    <EmailSvg />
                    <Input {...addNewState({state: 'email', name: 'email', type: 'email'})} />
                    <div className="invalid"></div>
                </FormGroup>
                <FormGroup>
                    <FormLabel text='Password'></FormLabel>
                    <PasswordSvg />
                    <Input {...addNewState({state: 'password', name: 'password', type: 'password'})}/>
                </FormGroup>
                <Button mode='login_form_btn' isDisabled={isDisabled}>Login</Button>
            </Form>
    )
}
export default memo(Login)