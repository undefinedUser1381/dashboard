import { createSlice } from "@reduxjs/toolkit";
import { TaskInterface } from "@/interfaces/taskInterface";

const initialState : TaskInterface = {
   isOpenModal : false,
   tasksList : []
}

const taskSlice = createSlice({
  name : "tasks",
  initialState,
  reducers : {
     openModal : (state) => {
        state.isOpenModal = true;
     } ,
     closeModal : (state) => {
        state.isOpenModal = false
     }
  }
})

export const {closeModal , openModal} = taskSlice.actions
export default taskSlice.reducer