import { memo, useCallback, useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import useUser from "../../Redux/hooks/useUser"
import useFetchUser from "../Hooks/useFetchUser"

const WithAuthUser = (props: {children: JSX.Element}) => {
    const navigate = useNavigate()
    const {user} = useUser()

    const isLoggedIn = useMemo(() => !(!!user.email), [user.email])
    const [shouldRedirectToLogin] = useFetchUser({shouldCheckIfUserLogged: isLoggedIn})
    const redirectToLogin = useCallback(() => navigate('/login'), [])

    useEffect(() => {
        if(shouldRedirectToLogin){
            redirectToLogin()
        }
    }, [shouldRedirectToLogin])




    return (<>{props.children}</>)
}
export default memo(WithAuthUser)