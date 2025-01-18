import {Button} from "@heroui/button";

interface TaskProps {
  title : string
  isComplete : boolean
}

function TodoItem({title} : TaskProps) {
  return (
    <div className="w-full p-5 bg-white shadow-lg dark:bg-[#24303F]">
       <div className="flex flex-col gap-4 sm:flex-row items-start sm:items-center sm:gap-0 justify-between w-full">
           <h3 className="font-medium w-[5rem] text-gray-500 text-[0.9rem]">{title}</h3>
           <div className="flex w-full gap-3 sm:gap-2 items-center sm justify-center sm:justify-end">
              <Button className="bg-blue-600 w-1/3 sm:w-auto text-white border-none rounded-none font-normal">Complete</Button>
              <Button className="bg-red-600 w-1/3 sm:w-auto text-white border-none rounded-none font-normal">Delete</Button>
           </div>
       </div>
    </div>
  )
}

export default TodoItem