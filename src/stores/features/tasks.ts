import { createSlice } from "@reduxjs/toolkit";
import { Task } from "@/interfaces/todoInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "@/services/axios/configs/apiConfig";
import { v4 as uuidv4 } from 'uuid';

export const getTasks = createAsyncThunk(
    "tasks/getTasks",
    async (url: string) => {
        return apiRequest.get(url)
            .then(res => res.data)
    }
)

export const addTask = createAsyncThunk(
    "tasks/addTask",
    async (value : string) => {
        return apiRequest.post("todos",{
            id : uuidv4(),
            title : value,
            isComplete:"false",
        })
        .then(res => res.data)
    }
)

export const deleteTask = createAsyncThunk(
    "tasks/deleteTask",
    async (id : string) => {
      return apiRequest.delete(`todos/${id}`)
      .then(res => res.data)
    }
)

const initialState = {
    error: null,
    isLoad: false,
    tasks: [] as Task[]
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getTasks.fulfilled, (state, action) => {
            state.isLoad = false
            state.error = null
            state.tasks = action.payload
        })
        builder.addCase(getTasks.pending, (state, action) => {
            state.isLoad = true
            state.error = null
        })
        builder.addCase(getTasks.rejected, (state, action) => {
            state.isLoad = false
            state.error = action.error.message
        })
        builder.addCase(addTask.fulfilled , (state , action) => {
            state.tasks.push(action.payload)
            state.isLoad = false
            state.error = null 
        })
        builder.addCase(addTask.pending , (state , action) => {
            state.isLoad = true
            state.error = null
        })
        builder.addCase(addTask.rejected, (state, action) => {
            state.isLoad = false
            state.error = action.error.message
        })
        builder.addCase(deleteTask.fulfilled , (state,action) => {
            state.isLoad = false
            state.error = null
            state.tasks = state.tasks.filter(task => task.id !== action.meta.arg)
        })
        builder.addCase(deleteTask.pending , (state,action) => {
            state.isLoad = true
            state.error = null
        })
        builder.addCase(deleteTask.rejected , (state,action) => {
            state.isLoad = false
            state.error = action.error.message
        })
    },
})

export default tasksSlice.reducer
