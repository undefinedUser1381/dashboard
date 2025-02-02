import ComponentLayout from "@/layout/ComponentLayout";
import TasksHeader from "./TasksHeader/TasksHeader";
import TaskBody from "./TaskBody/TaskBody";

function Task() {
  return (
    <ComponentLayout>
      <div className="px-[1rem] lg:px-[6rem] xl:px-[8rem] py-[2rem] xl:py-[3rem] w-full ml-auto mt-20 lg:w-[77%] xl:w-[83%]">
        <TasksHeader />
        <TaskBody />
      </div>
    </ComponentLayout>
  );
}

export default Task;
