import { createSlice } from "@reduxjs/toolkit";
import { themeInterface } from "@/interfaces/themeInterface";
import Cookies from 'js-cookie';

const initialState : themeInterface = {
    isDarkMode : Cookies.get("theme") === "dark" ? true : false
}

const themeSlice = createSlice({
   name : "theme",
   initialState ,
   reducers : {
      toggleTheme : (state) => {
          state.isDarkMode = !state.isDarkMode
          const theme = state.isDarkMode ? "dark" : "light"
          Cookies.set("theme",theme)
      } 
   }
});

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer