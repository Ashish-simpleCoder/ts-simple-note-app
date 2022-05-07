import { useEffect, useState } from "react"

const useLoginValidations = ({states, mode = 'login'}: {states: any, mode?: 'login' | 'signup'}) => {
    const [isDisabled, setIsDisabled] = useState(true)

    //for signup page
    const [validations, setValidations] = useState({
        number:false,
        lowercase: false,
        capital: false,
        characters: false
    })

    useEffect(() => {
        if(mode == 'login'){
            (!states['email'] || !states['password']) ?  setIsDisabled(true) :  setIsDisabled(false)
        }
    }, [states])


    if(mode == 'login'){
        return {isDisabled, setIsDisabled}
    }
    return {isDisabled, setIsDisabled, validations, setValidations}
}
export default useLoginValidations