import { createSlice } from "@reduxjs/toolkit";
const dark = JSON.parse(localStorage.getItem('dark') || 'false')

const themeSlice = createSlice({
    name: 'theme',
    initialState: {value: dark},
    reducers : {
        TOGGLE_THEME : (state) => {
            state.value = !state.value
        }
    }
})

export const {TOGGLE_THEME} = themeSlice.actions
export default themeSlice.reducer