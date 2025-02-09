import { createSlice } from "@reduxjs/toolkit";
import { Task } from "@/interfaces/todoInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "@/services/axios/configs/apiConfig";
import { v4 as uuidv4 } from 'uuid';

interface CompleteTask {
    id : string,
    isComplete : boolean
    title : string
}

export const getTasks = createAsyncThunk(
    "tasks/getTasks",
    async (url: string) => {
    const response = await apiRequest.get(url)
    return response.data
    }
)

export const addTask = createAsyncThunk(
    "tasks/addTask",
    async (value : string) => {
    const response = await apiRequest.post("todos",{
            id : uuidv4(),
            title : value,
            isComplete:false,
        })
    return response.data
    }
)

export const deleteTask = createAsyncThunk(
    "tasks/deleteTask",
    async (id : string) => {
      return apiRequest.delete(`todos/${id}`)
      .then(res => res.data)
    }
)

export const doTask = createAsyncThunk(
    "tasks/doTasks",
    async ({id , isComplete , title} : CompleteTask) => {
      const response = await apiRequest.put(`todos/${id}`,{
        isComplete : isComplete,
        title : title
      })
      return response.data
    }
)

const initialState = {
    error: null,
    isLoad: false,
    loadUpdate : false,
    tasks: [] as Task[],
    filteredTask : [] as Task[]
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
       filterOption : (state , action) => {
        const filterOption = action.payload
        switch(filterOption){
            case "All" : {
                console.log("all");
                state.tasks = [...state.filteredTask]
                break ;
            };
            case "Completed" : {
                console.log("Completed");
                state.tasks = state.filteredTask.filter(task => task.isComplete)
                break ;
            };
            case "Incompleted" : {
                console.log("Incomplete");
                state.tasks = state.filteredTask.filter(task => !task.isComplete)
                break ;
            };
            default : {
                state.tasks = [...state.filteredTask]
            }
        }
       }
    },
    extraReducers(builder) {
        builder.addCase(getTasks.fulfilled, (state, action) => {
            state.isLoad = false
            state.error = null
            state.tasks = action.payload
            // Set items to filteredTask for initializing
            state.filteredTask = action.payload
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
            state.filteredTask.push(action.payload)
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
            state.filteredTask = state.filteredTask.filter(task => task.id !== action.meta.arg)
        })
        builder.addCase(deleteTask.pending , (state,action) => {
            state.isLoad = true
            state.error = null
        })
        builder.addCase(deleteTask.rejected , (state,action) => {
            state.isLoad = false
            state.error = action.error.message
        })
        builder.addCase(doTask.fulfilled , (state,action) => {
            state.loadUpdate = false
            state.error = null
            const task = state.tasks.find((task) => task.id === action.payload.id)
            const taskFilter = state.filteredTask.find((task) => task.id === action.payload.id)
            console.log(action.payload);
            if(task && taskFilter){
                task.isComplete = action.payload.isComplete
                taskFilter.isComplete = action.payload.isComplete
            }
        })
        builder.addCase(doTask.pending , (state,action) => {
            state.loadUpdate = true
            state.error = null
        })
        builder.addCase(doTask.rejected , (state,action) => {
            state.loadUpdate = false
            state.error = action.error.message
        })
    },
})

export const { filterOption } = tasksSlice.actions
export default tasksSlice.reducer

