import TodoItem from "./TodoItem/TodoItem"
import TaskModal from "../TaskModal/TaskModal"
import { useSelector } from "react-redux"
import { RootState } from "@/stores/store"
import { Puff } from "react-loader-spinner"

function TaskBody() {

  const isOpenModal = useSelector((state : RootState) => state.taskModal.isOpenModal)
  const todos = useSelector((state : RootState) => state.tasks.tasks)
  const loading = useSelector((state : RootState) => state.tasks.isLoad)

  if(loading){
    return( 
     <div className="text-center mt-5 flex items-center justify-center">
       <Puff visible={true} height="40" width="40" color="#4fa94d" ariaLabel="puff-loading" wrapperStyle={{}} wrapperClass="" />
     </div> 
    )
  }

  return (
    <div className="mt-8">
      <h3 className="text-black dark:text-white font-medium text-[1.2rem]">To Do's {todos.length}</h3>
      <div className="flex flex-col gap-3 mt-5">
        {
          todos.length ? (
            todos.map(todo => (
              <TodoItem key={todo.id} {...todo}/>
            ))
          ) : (
            <div className="bg-red-500 p-3 text-white text-center">No Tasks Exists</div>
          )
        }
      </div>
      {
        isOpenModal && <TaskModal />
      }     
    </div>
  )
}

export default TaskBody