import { useCallback, useEffect, useMemo, useState } from "react"
import useUser from "../../Redux/hooks/useUser"
import { setLogin } from "../../Redux/slices/user.slice"

const useFetchUser = ({shouldCheckIfUserLogged = true}: {shouldCheckIfUserLogged: boolean}) => {
    const {dispatch} = useUser()
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
                console.log(data)
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