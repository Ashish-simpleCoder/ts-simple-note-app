import { createSlice } from "@reduxjs/toolkit";

const colorMenuSlice = createSlice({
    name: 'color_menu',
    initialState: {
        enable: false,
        item:{ bg:[''],_id:'' },
        position:{ top : '', left: '' }
    },
    reducers: {
        setColorMenu : (state, action) => {
            state.enable = action.payload.enable
            state.item = action.payload.item
            state.position = action.payload.position
        },
        setOnlyBg : (state, action) => {
            state.item.bg = action.payload
        },
        clearColorMenu : (state) => {
            state.enable = false
            state.item = { bg: [''], _id: ''}
            state.position = {top: '', left: ''}
        }
    }
})
export const {setColorMenu, clearColorMenu, setOnlyBg} = colorMenuSlice.actions
export default colorMenuSlice.reducer