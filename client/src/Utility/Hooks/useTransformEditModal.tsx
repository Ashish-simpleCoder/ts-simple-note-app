import { useCallback, useEffect, useRef } from "react"
import '../../Styles/expand-to-center.css'

const useTranformEditModal = ({id}: {id: string}) => {
    const ref_id = useRef(id)
    const modal_ref = useRef<HTMLDivElement>()
    const element_ref = useRef<HTMLDivElement>()

    useEffect(() => {
        ref_id.current = id
    }, [id])

    const enableEditModal = useCallback((_id:string) =>{
        const modal = document.getElementById('modal') as HTMLDivElement
        modal_ref.current = modal

        const element = document.getElementById(_id) as HTMLDivElement
        element.style.opacity = '0'
        element_ref.current = element

        const {top, left, width, height} = element.getBoundingClientRect()

        modal.style.setProperty('--top', top+'px')
        modal.style.setProperty('--left', left+'px')
        modal.style.setProperty('--width', width+'px')
        modal.style.setProperty('--height', height+'px')
        modal.style.setProperty('--display', 'flex')

        setTimeout(() => {
            document.body.classList.add('relative')
            modal.classList.add('expand-to-center')
        },100)
    }, [])

    const disableEditModal = useCallback(() => {
        document.body.classList.remove('relative')
        modal_ref.current?.classList.remove('expand-to-center')
        if(element_ref.current){
            element_ref.current.style.opacity = '1'
        }
    }, [])

    useEffect(()=>{
        id && setTimeout(() => enableEditModal(ref_id.current))
        !id && setTimeout(() => disableEditModal())
    },[id, enableEditModal])
}

export default useTranformEditModal