import { useDispatch, useSelector } from "react-redux"

const useStore = () => {
    const states = useSelector((state: Store) => state)
    const dispatch = useDispatch()
    return {states, dispatch}
}
export default useStore