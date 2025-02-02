import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "@/interfaces/auth";
import Cookies from 'js-cookie';

const initialState: Auth = {
    token: Cookies.get("token"),
    userDetails: null
}

const authSlice = createSlice({
    name: "slice",
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token
            state.userDetails = action.payload.name
            Cookies.set("token", action.payload.token);
        },
        logout: (state) => {
            state.token = null
            state.userDetails = null
            Cookies.remove("token");
        }
    }
})

export const { login , logout } = authSlice.actions
export default authSlice.reducer