import { createSlice } from "@reduxjs/toolkit"; 
import { sidebar } from "../../interfaces/sidebarInterface"; 

const initialState : sidebar = {
    isOpen : false
}

const sidebarSlice = createSlice({
    name : "sidebar", 
    initialState,
    reducers : {
        openSideBar : (state) => {
           state.isOpen = true
        },
        closeSideBar : (state) => {
            state.isOpen = false
        }
    }
});

export const { openSideBar , closeSideBar } = sidebarSlice.actions
export default sidebarSlice.reducer