import TodoItem from "./TodoItem/TodoItem"
import TaskModal from "../TaskModal/TaskModal"
import { useSelector } from "react-redux"
import { RootState } from "@/stores/store"

function TaskBody() {

  const isOpenModal = useSelector((state : RootState) => state.taskModal.isOpenModal)

  return (
    <div className="mt-8">
      <h3 className="text-black dark:text-white font-medium text-[1.2rem]">To Do's 03</h3>
      <div className="flex flex-col gap-3 mt-5">
        <TodoItem title="Todo Item" isComplete={false}/>
        <TodoItem title="Todo Item" isComplete={false}/>
        <TodoItem title="Todo Item" isComplete={false}/>
        <TodoItem title="Todo Item" isComplete={false}/>
      </div>
      {
        isOpenModal && <TaskModal />
      }     
    </div>
  )
}

export default TaskBody