import TodoItem from "./TodoItem/TodoItem"
import TaskModal from "../TaskModal/TaskModal"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/stores/store"
import { Puff } from "react-loader-spinner"
import { Alert } from "@heroui/alert"
import { filterOption } from "@/stores/features/tasks"

function TaskBody() {

  const dispath : AppDispatch = useDispatch(); 
  const isOpenModal = useSelector((state : RootState) => state.taskModal.isOpenModal);
  const todos = useSelector((state : RootState) => state.tasks.tasks);
  const loading = useSelector((state : RootState) => state.tasks.isLoad);
  const loadUpdae = useSelector((state : RootState) => state.tasks.loadUpdate);

  if(loading){
    return( 
     <div className="text-center mt-5 flex items-center justify-center">
       <Puff visible={true} height="40" width="40" color="#3B82F6" ariaLabel="puff-loading" wrapperStyle={{}} wrapperClass="" />
     </div> 
    )
  }

  return (
    <div className="mt-6">
      <h3 className="text-black dark:text-white font-medium text-[1.2rem]">To Do's {todos.length}</h3>
      <div className="flex mt-5 items-center justify-start">
        <select onChange={(e) => dispath(filterOption(e.target.value))} className="w-[7.5rem] p-2 bg-[#3C50E0] text-[0.9rem] text-white font-medium outline-none">
          <option value="All">All</option>
          <option value="Completed">Compeleted</option>
          <option value="Incompleted">Incompeleted</option>
        </select>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        {
          loadUpdae ? (
           <div className="text-center mt-5 flex items-center justify-center">
            <Puff visible={true} height="40" width="40" color="#4fa94d" ariaLabel="puff-loading" wrapperStyle={{}} wrapperClass="" />
          </div> 
          ) : (
              todos.length ? (
                todos.map(todo => (
                  <TodoItem key={todo.id} {...todo}/>
                ))
              ) : (
                <Alert color="danger" title="No tasks exit !"/>
              )
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