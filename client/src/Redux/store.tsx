import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/search.slice";
import themeSlice from "./slices/theme.slice";
import userSlice from "./slices/user.slice";
import colorMenuSlice from "./slices/color.menu.slice";



const store = configureStore({
    reducer: {
        theme: themeSlice,
        user: userSlice,
        search: searchSlice,
        color_menu: colorMenuSlice,
    }
})
export default store