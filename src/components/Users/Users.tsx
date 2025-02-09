import ComponentLayout from "@/layout/ComponentLayout";
import TitleLink from "../shared/TitleLink/TitleLink";
import UserBox from "./UserBox/UserBox";
import { useForm } from "react-hook-form";
import AddForm from "../shared/AddForm/AddForm";
import { addUser } from "@/validation/add-user";
import { SubmitHandler } from "react-hook-form";
import { RiUserAddLine } from "react-icons/ri";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { yupResolver } from "@hookform/resolvers/yup";
import { AppDispatch } from "@/stores/store";
import { useDispatch } from "react-redux";
import { postUser } from "@/stores/features/users";
import { User } from "@/interfaces/user";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { Oval } from "react-loader-spinner";

function Users() {

  const dispatch : AppDispatch = useDispatch() 
  const isLoadPost = useSelector((state : RootState) => state.users.isLoadPost)
  const [openFormModal , setisOpenFormModal] = useState<boolean>(false)
  
  const closeForm = () => {
    setisOpenFormModal(false)
  }

  const openForm = () => {
    setisOpenFormModal(true)
}

const { handleSubmit , register , formState : { errors } } = useForm({
  resolver : yupResolver(addUser),
})

const submitUser : SubmitHandler<User> = (data) => {
     const {email , name , phone , role} = data
     const date = String(new Date().getFullYear()) 
     const id = uuidv4()
     const wallet = "100,00"
     dispatch(postUser({ name , email , phone , role , wallet , id , date}))
}

  return (
    <>
     <ComponentLayout>
       <div className="px-[1rem] lg:px-[6rem] xl:px-[8rem] py-[2rem] xl:py-[3rem] w-full ml-auto mt-20 lg:w-[77%] xl:w-[83%]">
         <TitleLink link="/" title="Users" />
         <div className="flex flex-col">
          <div className="w-full p-4 mt-5 flex font-medium items-center justify-between bg-[#24303F]">
             <h4 className="dark:text-white text-black">Add User</h4>
             <button onClick={openForm} className="bg-blue-600 px-5 border-none outline-none py-2 text-white rounded-md cursor-pointer">Add User</button>
          </div>
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
          <input type="text" name="name" {...register("name")} className="input_form" placeholder="Name ..."/>
          {errors.name && <span className="w-full bg-red-400 text-white font-medium rounded-md p-1">{errors.name.message}</span>}
          <input type="text" name="email" {...register("email")} className="input_form" placeholder="Email ..."/>
          {errors.email && <span className="w-full bg-red-400 text-white font-medium rounded-md p-1">{errors.email.message}</span>}
          <input type="text" name="phone" {...register("phone")} className="input_form" placeholder="Phone ..." />
          {errors.phone && <span className="w-full bg-red-400 text-white font-medium rounded-md p-1">{errors.phone.message}</span>}
          <div className="flex flex-col gap-2 w-full">
           <label className="dark:text-white text-black font-medium text-[0.8rem]" htmlFor="">Choose Role</label>
           <select name="role" {...register("role")} className="w-[100%] bg-gray-800 border-gray-500 dark:text-white text-black border focus:border-blue-400 transition-all font-medium p-2" id="">
           <option value={"USER"}>User</option>
           <option value={"ADMIN"}>Admin</option>
          </select>
          {errors.role && <span className="w-full bg-red-400 text-white">{errors.role.message}</span>}
         </div>
         <div className="w-full flex items-center justify-center md:justify-end mt-2">
           <button className="bg-green-500 flex items-center justify-center gap-2 p-2 font-medium text-white w-[100%] rounded-lg sm:w-[50%] md:w-[25%] lg:w-[20%] xl:w-[15%]">
           {
             isLoadPost ? (
               <Oval visible={true} color="#fff" height="25" width="25" ariaLabel="oval-loading" wrapperStyle={{}} wrapperClass="" />
             ) : (
              <>
               <RiUserAddLine />
               Add User
              </>
             )
           }
           </button>
         </div>
          </AddForm>
       }
     </ComponentLayout>
    </>
  );
}

export default Users;
