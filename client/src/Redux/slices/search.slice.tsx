import { createSlice } from "@reduxjs/toolkit";
import removeWhiteSpaces from '../../Utility/Utility Functions/removeWhiteSpaces'

const searchSlice = createSlice({
    name: 'search',
    initialState: {value: ''},
    reducers: {
        setSearch: (state, action) =>{
            const search_key = action.payload && removeWhiteSpaces(action.payload)
            state.value = search_key || action.payload
         }
    }
})
export const {setSearch} = searchSlice.actions
export default searchSlice.reducer