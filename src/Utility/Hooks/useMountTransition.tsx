import { useEffect, useState } from "react"

const useMountTransition = ({isMounted, unmountDelay}: {isMounted: boolean, unmountDelay: number}) => {
    const [hasTransitionedIn, setHasIsTransitionedIn] = useState(false)

    useEffect(() => {
        let timeoutId:any

        if(isMounted && !hasTransitionedIn){
            setHasIsTransitionedIn(true)
        }else if(!isMounted && hasTransitionedIn){
            timeoutId = setTimeout(() => setHasIsTransitionedIn(false), unmountDelay)
        }
        return () => clearTimeout(timeoutId)
    }, [unmountDelay, isMounted, hasTransitionedIn])

    return hasTransitionedIn

}
export default useMountTransition