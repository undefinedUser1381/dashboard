import { RiUserAddLine } from "react-icons/ri";
import Input from "@/components/Input/Input";

function UserAddForm() {
  return (
    <form className="bg-[#FFFFFF] shadow-lg p-5 mt-5 w-full dark:bg-[#24303F]">
      <div className="flex w-full flex-wrap gap-3">
      <Input name="name" placeholder="name..."/>
      <Input name="name" placeholder="family..."/>
      <Input name="name" placeholder="email..."/>
      <Input name="name" placeholder="password..."/>
      </div>
      <div className="sm:w-[20%] md:w-[25%] lg:w-[20%] xl:w-[18%] w-full text-white mb-1 mx-auto">
       <div className="w-full transition-all hover:opacity-70 flex items-center justify-center gap-2 mt-6 p-2 font-medium bg-green-500">
        <RiUserAddLine />
        <button className="" type="submit">Add User</button>
       </div>
      </div>
    </form>
  )
}

export default UserAddForm