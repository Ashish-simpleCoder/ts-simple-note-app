import { useEffect, useMemo, useState } from "react"
import { useDispatch } from "react-redux"
import { setLogin } from "../../Redux/slices/user.slice"

const useFetchUser = ({shouldCheckIfUserLogged = true}: {shouldCheckIfUserLogged: boolean}) => {
    const dispatch = useDispatch()
    const [shouldRedirectToLogin, setShouldRedirectToLogin] = useState(false)


    const controller = new AbortController()
    const url = useMemo(() => new Request('http://localhost:5000/api/user', {
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