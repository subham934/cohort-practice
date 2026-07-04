import {createSlice} from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: "light",
    },
    reducers:{
        lightTheme: (state)=>{
            state.value = "light";
        },
        darkTheme: (state)=>{
            state.value = "dark";
        },
        brownTheme: (state)=>{
            state.value = "brown";
        }
    }
})

export const {lightTheme, darkTheme, brownTheme} = themeSlice.actions;
export default themeSlice.reducer;   