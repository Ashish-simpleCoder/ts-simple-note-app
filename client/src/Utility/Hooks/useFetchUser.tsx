import { useEffect, useMemo, useState } from "react"
import { useDispatch } from "react-redux"
import { setLogin } from "../../Redux/slices/user.slice"

const useFetchUser = ({shouldCheckIfUserLogged = true}: {shouldCheckIfUserLogged: boolean}) => {
    const dispatch = useDispatch()
    const [shouldRedirectToLogin, setShouldRedirectToLogin] = useState(false)


    const controller = new AbortController()
    const user_fetch_url = new Request(process.env.NODE_ENV == 'development' ? process.env.REACT_APP_DEV_USER_FETCH! : process.env.REACT_APP_PROD_USER_FETCH! )
    const url = useMemo(() => new Request(user_fetch_url, {
        method:'GET',
        headers:{'Content-Type':'application/json'},
        credentials: 'include',
        signal: controller.signal
    }), [])


    useEffect(() => {
        if(shouldCheckIfUserLogged){
            (async() => {
                const res = await fetch(url)
                const data = await res.json()
                if('email' in data){
                    dispatch(setLogin(data['email']))
                }
                if(!data['email']){
                    setShouldRedirectToLogin(true)
                }
            })()
        }
    }, [])
    return [shouldRedirectToLogin]
}
export default useFetchUser