import { useEffect, useRef } from "react"

const useClickListener = ({eventName,eventName2 = 'keyup', element2 = window, handler, element = window, run,}:{
    handler: any,
    eventName: 'click',
    eventName2?: 'keyup',
    element2?: Window,
    element: Element | null | Window & typeof globalThis | Document,
    run: boolean
}) => {

    const handlerRef = useRef(handler)
    useEffect(() => {
        handlerRef.current = handler
    }, [handler])


    useEffect(()=>{
        const eventListener = (e:Event | any ) => {
            (e.target.id == 'wrapper') && handlerRef.current()
        }
        const eventListener2 = (e:KeyboardEvent) => {
            (e.key === 'Escape') && handlerRef.current()
        }

        if(run){
            element?.addEventListener(eventName, eventListener, false)
            element2?.addEventListener(eventName2, eventListener2, false)
        }else{
            element?.removeEventListener(eventName, eventListener, false)
            element2?.removeEventListener(eventName2, eventListener2, false)
        }
        return () => {
            element?.removeEventListener(eventName, eventListener, false)
            element2?.removeEventListener(eventName2, eventListener2, false)
        }
    }, [eventName, element, run])

}
export default useClickListener