import { CSSProperties, memo, useEffect, useMemo } from "react"
import { useDispatch } from "react-redux"
import { setSearch } from "../../Redux/slices/search.slice"
import SearchIcon from "../../Svg/SearchIcon"
import useForm from "../../Utility/Hooks/useForm"
import Input from "../PureComponents/Input"
import FormGroup from "./FormGroup/Form.group"

const SearchBar = (props: {style?: CSSProperties}) => {
    const search = useMemo(() => 'search', [])
    const {addNewState, states} = useForm()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setSearch(states[search]))
    }, [states[search]])


    return(
        <FormGroup
            styles={{
                backgroundColor: 'var(--input-bg)',
                width: 'unset',
                margin: 'unset',
                marginInlineStart: 'auto',
                marginInlineEnd: 'clamp(2rem, 4rem, 4vw)',
                ...props.style
            }}
        >
            <SearchIcon />
            <Input {...addNewState({state: search, name:'search', placeholder: 'search notes...'})} mode='search_bar'/>
            <div className="utility focus-border"></div>
        </FormGroup>
    )
}
export default memo(SearchBar)

