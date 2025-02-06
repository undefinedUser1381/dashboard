import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiRequest } from "@/services/axios/configs/apiConfig";
import { User } from "@/interfaces/user";

interface usersStates {
    isLoading : boolean,
    isLoadPost : boolean
    usersData : User[],
    error : any
}

const initialState : usersStates = {
    isLoading : false,
    usersData : [],
    isLoadPost : false,
    error : null
}

export const getUsers = createAsyncThunk(
    "members/getUsers",
    async (url : string) => {
        const response = await apiRequest.get(url);
        return response.data;
    }
)

export const postUser = createAsyncThunk(
    "members/postUser",
    async ({ name , email , phone , role , wallet , id , date } : User) => {
      const response = await apiRequest.post("members",{
        id ,
        name ,
        email ,
        phone ,
        role , 
        wallet ,
        date
      });
      return response.data;
    }
)

export const deleteMember = createAsyncThunk(
    "members/deleteUser",
    async (id : string) => {
      const response = await apiRequest.delete(`members/${id}`);
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
         builder.addCase(postUser.fulfilled,(state,action) => {
            state.usersData.push(action.payload)
            state.isLoadPost = false,
            state.error = null
         })
         builder.addCase(postUser.pending,(state,action) => {
             state.isLoadPost = true;
             state.error = null
          })
          builder.addCase(postUser.rejected,(state,action) => {
             state.isLoadPost = false
             state.error = action.error.message
          })
          builder.addCase(deleteMember.fulfilled,(state,action) => {
            state.isLoadPost = false,
            state.error = null
            state.usersData = state.usersData.filter(member => member.id !== action.meta.arg)
         })
         builder.addCase(deleteMember.pending,(state,action) => {
             state.isLoadPost = true;
             state.error = null
          })
          builder.addCase(deleteMember.rejected,(state,action) => {
             state.isLoadPost = false
             state.error = action.error.message
          })
    },    
})

export default userSlice.reducer
