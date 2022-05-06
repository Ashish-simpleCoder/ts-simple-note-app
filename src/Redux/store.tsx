import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme.slice";
import userSlice from "./slices/user.slice";

const store = configureStore({
    reducer: {
        theme: themeSlice,
        user: userSlice
    }
})
export default store