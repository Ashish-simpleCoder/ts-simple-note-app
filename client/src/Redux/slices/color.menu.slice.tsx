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
        }
    }
})
export const {setColorMenu} = colorMenuSlice.actions
export default colorMenuSlice.reducer