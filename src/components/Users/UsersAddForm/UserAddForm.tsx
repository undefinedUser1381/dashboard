import { RiUserAddLine } from "react-icons/ri";

function UserAddForm() {
  return (
    <form className="bg-[#F1F5F9] p-5 mt-5 w-full dark:bg-[#24303F]">
      <div className="flex w-full child:w-full flex-wrap child:p-2 child:font-medium child:transition-all child:outline-none child:border-gray-600 child:border-2 focus:child:border-blue-600 child:bg-transparent gap-3 child:text-white sm:child:w-[48%] xl:child:w-[49%]">
      <input type="text" name="" id="" placeholder="name..."/>
      <input type="text" name="" id="" placeholder="family..."/>
      <input type="text" name="" id="" placeholder="email..."/>
      <input type="text" name="" id="" placeholder="password"/>
      </div>
      <div className="sm:w-[20%] md:w-[25%] lg:w-[20%] xl:w-[18%] w-full text-white mb-1 mx-auto">
       <div className="w-full flex items-center justify-center gap-2 mt-6 p-2 font-medium bg-green-500">
        <RiUserAddLine />
        <button className="" type="submit">Add User</button>
       </div>
      </div>
    </form>
  )
}

export default UserAddForm