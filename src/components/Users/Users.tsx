import ComponentLayout from "@/layout/ComponentLayout";
import TitleLink from "../shared/TitleLink/TitleLink";
import UserBox from "./UserBox/UserBox";
import { useForm } from "react-hook-form";
import AddForm from "../shared/AddForm/AddForm";
import { AddUser } from "@/interfaces/add-user"; 
import { addUser } from "@/validation/add-user";
import { SubmitHandler } from "react-hook-form";
import { RiUserAddLine } from "react-icons/ri";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

function Users() {

  const [openFormModal , setisOpenFormModal] = useState<boolean>(true)

  const closeForm = () => {
    setisOpenFormModal(false)
  }

  const openForm = () => {
    setisOpenFormModal(true)
}

const { handleSubmit , register , formState : { errors } } = useForm({
  resolver : yupResolver(addUser)
})

const submitUser : SubmitHandler<AddUser> = (data) => {
    console.log(data);
}

  return (
    <>
     <ComponentLayout>
       <div className="px-[1rem] lg:px-[6rem] xl:px-[8rem] py-[2rem] xl:py-[3rem] w-full ml-auto mt-20 lg:w-[77%] xl:w-[83%]">
         <TitleLink link="/" title="Users" />
         <div className="flex flex-col">
       
          {/* All user boxes */}
          <div className="flex mt-5 flex-col gap-3">
            <h3 className="text-[1.4rem] dark:text-white font-medium">
              All users
            </h3>
            <UserBox/>
          </div>
         </div>
       </div>
       {
         openFormModal && 
         <AddForm onClose={closeForm} onSubmit={handleSubmit(submitUser)} title="Add User Form">
          <input type="text" name="name" {...register("name")} className="w-full font-medium p-2 rounded-lg transition-all border border-gray-500 focus:border-blue-500 outline-none text-white" placeholder="Name ..."/>
          {errors.name && <span className="w-full bg-red-400 text-white font-medium rounded-md p-1">{errors.name.message}</span>}
          <input type="text" name="email" {...register("email")} className="w-full font-medium p-2 rounded-lg transition-all border border-gray-500 focus:border-blue-500 outline-none text-white" placeholder="Email ..."/>
          {errors.email && <span className="w-full bg-red-400 text-white font-medium rounded-md p-1">{errors.email.message}</span>}
          <input type="text" name="phone" {...register("phone")} className="w-full font-medium p-2 rounded-lg transition-all border border-gray-500 focus:border-blue-500 outline-none text-white" placeholder="Phone ..." />
          {errors.phone && <span className="w-full bg-red-400 text-white font-medium rounded-md p-1">{errors.phone.message}</span>}
          <div className="flex flex-col gap-2 w-full">
           <label className="dark:text-white text-black font-medium text-[0.8rem]" htmlFor="">Choose Role</label>
           <select name="role" {...register("role")} className="w-[100%] border-gray-500 dark:text-white text-black border focus:border-blue-400 transition-all font-medium p-2" id="">
           <option value={"USER"}>User</option>
           <option value={"ADMIN"}>Admin</option>
          </select>
          {errors.role && <span className="w-full bg-red-400 text-white">{errors.role.message}</span>}
         </div>
         <div className="w-full flex items-center justify-center md:justify-end mt-2">
           <button className="bg-green-500 flex items-center justify-center gap-2 p-2 font-medium text-white w-[100%] rounded-lg md:w-[40%] lg:w-[20%]">
            <RiUserAddLine />
            Add User
           </button>
         </div>
       </AddForm>
       }
     </ComponentLayout>
    </>
  );
}

export default Users;
