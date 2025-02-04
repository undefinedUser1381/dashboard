import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiRequest } from "@/services/axios/configs/apiConfig";
import { User } from "@/interfaces/user";

interface usersStates {
    isLoading : boolean,
    usersData : User[],
    error : any
}

const initialState : usersStates = {
    isLoading : false,
    usersData : [],
    error : null
}

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (url : string) => {
        const response = await apiRequest.get(url);
        return response.data;
    }
)

const userSlice = createSlice({
    name : "users",
    initialState ,    
    reducers : {},
    extraReducers(builder) {
        builder.addCase(getUsers.fulfilled,(state,action) => {
           state.usersData = action.payload
           state.isLoading = false,
           state.error = null
        })
        builder.addCase(getUsers.pending,(state,action) => {
            state.isLoading = true;
            state.error = null
         })
         builder.addCase(getUsers.rejected,(state,action) => {
            state.isLoading = false
            state.error = action.error.message
         })
    },    
})

export default userSlice.reducer
