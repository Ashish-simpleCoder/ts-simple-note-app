import { useEffect, useRef } from "react"

const useNoteClickListener = (props:{
    handler: any,
    eventName?: 'click',
    element?: Element | null | Window & typeof globalThis | Document,
    run?: boolean
}) => {
    const {eventName = 'click', handler, element = window, run = false} = props

    const handlerRef = useRef(handler)
    useEffect(() => {
        handlerRef.current = handler
    }, [handler])


    useEffect(()=>{
        const eventListener = (e:Event | any ) => {
            // handlerRef.current(e)
            handler(e)
        }


        if(run){
            element?.addEventListener(eventName, eventListener, false)
        }else{
            element?.removeEventListener(eventName, eventListener, false)
        }
        return () => {
            element?.removeEventListener(eventName, eventListener, false)
        }
    }, [eventName, element, run])

}
export default useNoteClickListener