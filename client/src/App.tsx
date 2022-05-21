import "./Styles/style.css"
import Header from "./Components/Journal Components/Header/Header"
import withRouter from "./Utility/Utility Components/withRouter"
import withStore from "./Utility/Utility Components/withStore"

const App = ({children}: {children?: JSX.Element | JSX.Element[]}) => {

    return(
        <>
            <Header />
            {children}
        </>
    )
}
export default () => withStore(() => withRouter(App))