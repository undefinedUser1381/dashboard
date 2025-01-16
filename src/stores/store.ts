import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebar"
import themeReducer from "./features/theme"

const store = configureStore({
    reducer : {
        sidebar : sidebarReducer,
        theme : themeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export {store}


