import { lazy, memo, useCallback, useState } from "react"
import SearchIcon from "../../Svg/SearchIcon"
import useClickListener from "../../Utility/Hooks/useClickListener"
import If from "../../Utility/Utility Components/If"
import WithModalWrapper from "../../Utility/Utility Components/withModalWrapper"
import WithSuspense from "../../Utility/Utility Components/WithSuspense"
import Button from "../PureComponents/Button"

const SearchBar = lazy(() => import("./SearchBar" /* webpackChunkName: 'SearchBar' */))

const MiniSearchBar = () => {
    const [shouldDisplayMiniSearchBar, setShouldDisplayMiniSearchBar] = useState(false)

    const enableMiniSearchBar = useCallback(() => setShouldDisplayMiniSearchBar(true), [])
    const disableMiniSearchBar = useCallback(() => setShouldDisplayMiniSearchBar(false), [])

    useClickListener({
        element: document,
        handler: disableMiniSearchBar,
        run: shouldDisplayMiniSearchBar
    })


    return(
        <>
        <Button onClick={enableMiniSearchBar} style={{marginInlineStart: 'auto'}}>
            <SearchIcon />
        </Button>
        <If condition={shouldDisplayMiniSearchBar}>
            <WithModalWrapper style={{display: 'flex', justifyContent: 'center'}}>
                <WithSuspense Comp={() => <SearchBar style={{margin: 'unset', marginInline: 'unset', marginBlockStart: '3rem'}}/> }/>
            </WithModalWrapper>
        </If>
        </>
    )
}
export default memo(MiniSearchBar)

