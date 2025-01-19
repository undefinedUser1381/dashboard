import SideBar from "../SideBar/SideBar"
import Header from "../Header/Header"
import TasksHeader from "./TasksHeader/TasksHeader"
import TaskBody from "./TaskBody/TaskBody"

function Task() {
  return (
    <section className="w-[100%] flex items-start justify-between font-bold">
       <SideBar />
       <section className="w-full min-h-screen bg-[#F1F5F9] dark:bg-[#1A222C]">
         <Header />
         <div className="px-[1rem] lg:px-[6rem] xl:px-[8rem] py-[2rem] xl:py-[3rem] w-full ml-auto mt-20 lg:w-[77%] xl:w-[83%]">
           <TasksHeader/>
           <TaskBody />
         </div>
       </section>
    </section>
  )
}

export default Task