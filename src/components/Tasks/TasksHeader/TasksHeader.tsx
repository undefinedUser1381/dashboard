import TitleLink from "../../shared/TitleLink/TitleLink";
import {Button} from "@heroui/button";
import { LuPlus } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { openModal } from "@/stores/features/taskmodal"; "../../../stores/features/taskmodal.ts"
import { AppDispatch } from "@/stores/store";

function TasksHeader() {  

  const dispatch : AppDispatch = useDispatch()

  return (
    <div className="flex flex-col">
      <TitleLink title="Tasks" link={"/tasks"} />
      <div className="bg-white mt-4 p-3 child:font-medium child:text-black flex items-center justify-between child:dark:text-white shadow-lg dark:bg-[#24303F]">
        <span className="text-[1.4rem]">Tasks</span>
        <Button onPress={() => dispatch(openModal())} className="flex font-medium rounded-none bg-[#3C50E0] py-2 p-1 w-[7.5rem] items-center gap-2 justify-center">
          <LuPlus className="text-white"/> <span className="text-white">Add Task</span>
        </Button>
      </div>
    </div>
  );
}

export default TasksHeader;
