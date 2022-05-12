import { useDispatch, useSelector } from "react-redux"

const useColorMenu = () => {
    const color_menu = useSelector((state: ColorMenu) => state.color_menu)
    const dispatch = useDispatch()
    return {color_menu, dispatch}
}
export default useColorMenu