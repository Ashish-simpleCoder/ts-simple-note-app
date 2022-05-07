import { useDispatch, useSelector } from "react-redux"

interface ISearch{
    search: {value: string}
}

const useSearch = () => {
    const search = useSelector((state: ISearch) =>  state.search.value)
    const dispatch = useDispatch()

    return {search, dispatch}

}
export default useSearch