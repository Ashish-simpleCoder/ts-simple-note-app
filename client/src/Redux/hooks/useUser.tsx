import { useDispatch, useSelector } from "react-redux"

const useUser = () => {
    const user = useSelector((state: User) => state.user)
    const dispatch = useDispatch()
    return {user, dispatch}
}
export default useUser