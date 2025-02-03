import {Button} from "@heroui/button";
import { deleteTask } from "@/stores/features/tasks";
import { AppDispatch } from "@/stores/store";
import { useDispatch } from "react-redux";

interface TaskProps {
  id : string
  title : string
  isComplete : string
};

function TodoItem({id,title , isComplete} : TaskProps) {

  const dispatch : AppDispatch = useDispatch() 

  const deleteTodo = (ID) => {
      dispatch(deleteTask(ID));
  }

  return (
    <div className="w-full p-5 bg-white shadow-lg dark:bg-[#24303F]">
       <div className="flex flex-col gap-4 sm:flex-row items-start sm:items-center sm:gap-0 justify-between w-full">
           <h3 className={`font-medium ${isComplete === "true" ? "line-through text-gray-600" : "text-gray-400"} w-[8rem] text-[0.9rem]`}>{title}</h3>
           <div className="flex w-full gap-3 sm:gap-2 items-center sm justify-center sm:justify-end">
              <Button className="bg-blue-600 w-1/3 sm:w-auto text-white border-none rounded-none font-normal">Complete</Button>
              <Button onPress={() => deleteTodo(id)} className="bg-red-600 w-1/3 sm:w-auto text-white border-none rounded-none font-normal">Delete</Button>
           </div>
       </div>
    </div>
  )
}

export default TodoItem