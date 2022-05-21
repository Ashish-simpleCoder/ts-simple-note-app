import { memo, Suspense } from "react"
import H3 from "../../Components/PureComponents/H3"

const WithSuspense = ({Comp}: {Comp:(() => JSX.Element )|  React.LazyExoticComponent<React.MemoExoticComponent<() => JSX.Element>>}) => {
    return(
        <Suspense fallback={<H3 styles={{margin: '0'}}>loading...</H3>}><Comp/></Suspense>
    )
}
export default memo(WithSuspense)