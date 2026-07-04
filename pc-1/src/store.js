import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterSlice";
import themeReducer from "./redux/themeSlice";


export const store = configureStore({
    reducer:{
        counter : counterReducer,
        theme : themeReducer
    }
})