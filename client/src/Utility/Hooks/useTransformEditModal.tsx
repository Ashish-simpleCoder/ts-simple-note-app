import { useCallback, useEffect, useRef } from "react"
import '../../Styles/expand-to-center.css'

const useTranformEditModal = ({note_id}: {note_id: string}) => {
    const ref_id = useRef(note_id)
    const modal_ref = useRef<HTMLDivElement>()
    const element_ref = useRef<HTMLDivElement>()

    useEffect(() => {
        ref_id.current = note_id
    }, [note_id])

    const enableEditModal = useCallback((_id:string) =>{
        const modal = document.getElementById('modal') as HTMLDivElement
        const element = document.getElementById(_id) as HTMLDivElement

        modal_ref.current = modal
        modal_ref.current.id = _id
        element_ref.current = element

        element.style.opacity = '0'

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
        setTimeout(() => {
            if(element_ref.current){
                element_ref.current.style.opacity = '1'
            }
            }, 250)
    }, [])

    useEffect(()=>{
        note_id && setTimeout(() => enableEditModal(ref_id.current))
        !note_id && setTimeout(() => disableEditModal())
    },[note_id, enableEditModal])
}

export default useTranformEditModal