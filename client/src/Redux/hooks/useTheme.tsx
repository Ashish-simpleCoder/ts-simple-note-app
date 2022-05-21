import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const useTheme = () => {
    const theme = useSelector((state: Theme) => state.theme.value)
    const dispatch = useDispatch()

    useEffect(() => {
        document.body.classList.toggle('dark', theme)
        localStorage.setItem('dark', JSON.stringify(theme))
    }, [theme] )

    return {theme, dispatch}
}
export default useTheme