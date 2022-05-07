import { ReactNode } from "react"
import SearchIcon from "../../Svg/SearchIcon"
import useForm from "../../Utility/Hooks/useForm"
import Input from "../PureComponents/Input"
import FormGroup from "./FormGroup/Form.group"

const SearchBar = ({children}: {children?: ReactNode}) => {
    const {addNewState} = useForm()

    return(
        <FormGroup  styles={{width: 'unset',margin: 'unset',marginInlineStart: 'auto',marginInlineEnd: 'clamp(2rem, 4rem, 4vw)',height: 'clamp(3.5rem ,4rem, 4vw)'}}>
            <SearchIcon />
            <Input {...addNewState({state: 'search', name:'search', placeholder: 'search notes...'})} mode='search_bar'/>
            <div className="utility focus-border"></div>
    </FormGroup>
    )
}
export default SearchBar

