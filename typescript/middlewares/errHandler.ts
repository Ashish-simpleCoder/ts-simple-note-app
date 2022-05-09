
const errHandler = async(err:any, req:any, res:any, next:any) => {
    const errors:any = { email:'', password:'',err:'' }

    // if login  credentials are wrong then dev has to show the errors to the user
    const {email, password, status, error, mode} = err
    if(email){
        return res.status(status ? status : 200).send({error: email})
    }
    if(password){
        return res.status(status ? status : 200).send({error: password})
    }


    // dev has to show the errors occured during the login process
    if(error){
        if(mode === 'note'){
            return res.status(status ? status : 200).send({error})
        }
        //old code
        // errors.err = error
        return res.status(status ? status : 200).send({error})
    }


    // if registered email comes again for registration then dev has to show unique emai error
    const errors_arr:string[] = []

    if(err.code === 11000){
        const email_err = 'email is already registered'
        errors_arr.push(email_err)
        return res.status(500).send({errors: errors_arr})
    }


    // if validation errors occurs during registration then show the user errors
    if(err?.message?.includes('validation failed')){
        Object.values(err.errors).forEach((value:any) => {
            const {path,message} = value?.properties
            errors[path] = message
            errors_arr.push(message)
        } )
        return res.status(500).send({errors: errors_arr})
    }
    // return res.status(500).send({errors: errors_arr})
}
export default errHandler