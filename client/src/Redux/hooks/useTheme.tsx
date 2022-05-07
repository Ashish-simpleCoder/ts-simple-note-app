import { useDispatch, useSelector } from "react-redux"

const useTheme = () => {
    const theme = useSelector((state: Theme) => state.theme.value)
    const dispatch = useDispatch()
    return {theme, dispatch}
}
export default useTheme