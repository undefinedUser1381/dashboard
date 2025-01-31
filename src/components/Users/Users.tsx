import Header from "../Header/Header"
import SideBar from "../SideBar/SideBar"
import TitleLink from "../TitleLink/TitleLink"
import UserBox from "./UserBox/UserBox"
import UserAddForm from "./UsersAddForm/UserAddForm"

function Users() {
  return (
    <section className="w-[100%] flex items-start justify-between font-bold">
      <SideBar />
      <section className="w-full min-h-screen bg-[#F1F5F9] dark:bg-[#1A222C]">
       <Header />
       <div className="px-[1rem] lg:px-[6rem] xl:px-[8rem] py-[2rem] xl:py-[3rem] w-full ml-auto mt-20 lg:w-[77%] xl:w-[83%]">
        <TitleLink link="/" title="Users"/>
        <div className="flex flex-col">
           <UserAddForm />
           {/* All user boxes */}
           <div className="flex mt-5 flex-col gap-3">
             <h3 className="text-[1.4rem] dark:text-white font-medium">All users</h3>
             <UserBox />
           </div>
        </div>
       </div>
      </section>
    </section>
  )
}

export default Users