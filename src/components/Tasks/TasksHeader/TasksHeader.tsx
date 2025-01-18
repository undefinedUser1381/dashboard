import TitleLink from "@/components/TitleLink/TitleLink";
import {Button} from "@heroui/button";
import { LuPlus } from "react-icons/lu";

function TasksHeader() {
  return (
    <div className="flex flex-col">
      <TitleLink title="Tasks" link={"/tasks"} />
      <div className="bg-white mt-4 p-3 child:font-medium child:text-black flex items-center justify-between child:dark:text-white shadow-lg dark:bg-[#24303F]">
        <span className="text-[1.4rem]">Tasks</span>
        <Button className="flex font-medium rounded-none bg-[#3C50E0] py-2 p-1 w-[7.5rem] items-center gap-2 justify-center">
          <LuPlus /> Add task
        </Button>
      </div>
    </div>
  );
}

export default TasksHeader;
