import { useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useUser from "../../Redux/hooks/useUser"
import useFetchUser from "../Hooks/useFetchUser"


const WithFetchUserHook = (props: {children: JSX.Element}) => {
    const {user} = useUser()
    const navigate = useNavigate()

    useFetchUser({shouldCheckIfUserLogged: !user.email})

    const redirectLoggedUserToHome = useCallback(() => navigate('/'), [])

    useEffect(() => {
        user.email && redirectLoggedUserToHome()
    }, [user.email])


    return  <>{props.children}</>
}
export default WithFetchUserHook