import "./Styles/style.css"
import { memo, useEffect } from "react"
import Header from "./Components/Journal Components/Header/Header"
import withRouter from "./Utility/Utility Components/withRouter"
import withStore from "./Utility/Utility Components/withStore"
import useTheme from "./Redux/hooks/useTheme"

const App = ({children}: {children?: JSX.Element | JSX.Element[]}) => {

    const {theme} = useTheme()
    useEffect(() => {
        document.body.classList.toggle('dark', theme)
        localStorage.setItem('dark', JSON.stringify(theme))
    }, [theme] )


    return(
        <>
            <Header />
            {children}
        </>
    )
}
// export default memo(() => withRouter(() => withStore(App)))
export default memo(() => withStore(() => withRouter(App)))