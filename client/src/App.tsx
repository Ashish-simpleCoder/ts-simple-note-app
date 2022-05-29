import { lazy, Suspense } from "react"
import "./Styles/style.css"
import withRouter from "./Utility/Utility Components/withRouter"
import withStore from "./Utility/Utility Components/withStore"

const Header =  lazy(() => import("./Components/Journal Components/Header/Header" /* webpackChunkName: 'header'*/))

const App = ({children}: {children?: JSX.Element | JSX.Element[]}) => {
    return(
        <>
            <Suspense fallback={<></>}><Header /></Suspense>
            {children}
        </>
    )
}
export default () => withStore(() => withRouter(App))