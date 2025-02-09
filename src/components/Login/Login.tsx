import { useTranslation } from "react-i18next"
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";
import avatarImage from "../../assets/images/signup/bg-01.jpg"
import { useForm } from "react-hook-form";
import { loginSchema } from "../../validation/login";
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler } from "react-hook-form";
import { loginInterface } from "../../interfaces/loginInterface";
import { apiRequest } from "@/services/axios/configs/apiConfig";
import { useEffect, useState } from "react";
import { ToastContainer, toast , Bounce } from 'react-toastify';
import { login } from "@/stores/features/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "@/stores/store";
import { Users } from "../../interfaces/users";

function Login() {
   
document.title = "Dashboard | Login"
const { t } = useTranslation()

const dispatch : AppDispatch = useDispatch() 
  
const navigate = useNavigate();

const [users , setUsers] = useState<Users[]>([]);

useEffect(() => {
    apiRequest.get("users").then(res => res.data)
   .then(data => setUsers(data))
},[])

 const {
    handleSubmit , 
    register ,
    formState: { errors },
 } = useForm({
    resolver: yupResolver(loginSchema)
 })

const submitUser : SubmitHandler<loginInterface> = (data) => {
   users.forEach(user => {
      if(user.email === data.email && user.name === data.userName){
         dispatch(login({token : user.token , name : user.name}))
         navigate("/");
      }else{
         toast.error('Informations are not correct !', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
      }
   })
}

  return (
    <div className="bg-image flex items-center justify-center sm:py-6 sm:px-6 w-full">
       <form onSubmit={handleSubmit(submitUser)} className="bg-white dark:bg-[#24303F] rounded-xl shadow-xl w-[90%] sm:w-[25rem] z-20 h-auto pb-4">
          <h3 className="text-center pt-12 dark:text-white font-bold text-[2rem]">{t("Sign In")}</h3>
          <div className="flex flex-col w-full gap-8 px-3 mt-12 items-center">
          <div className="flex flex-col items-center gap-5 w-[80%]">
           <Input {...register("userName")} label="Username" size="sm" placeholder="Seyed Erfan Ghexi" className="shadow-lg rounded-lg"  type="username" />
           {errors.userName && <span className="text-white bg-red-500 w-full px-2 py-1 rounded-lg">{errors.userName.message}</span>}
          </div>
          <div className="flex flex-col items-center gap-5 w-[80%]">
           <Input {...register("email")} label="Email" size="sm" className="shadow-lg rounded-lg" placeholder="erfanghezi5050@gmail.com" type="email" />
           {errors.email && <span className="text-white bg-red-500 w-full px-2 py-1 rounded-lg">{errors.email.message}</span>}
          </div>
           <Button type="submit" className="w-[10rem] text-white p-7 bg-purple-500 mt-6 shadow-lg font-bold shadow-purple-500 rounded-[5rem]">SIGN IN</Button>
           <div className="mt-12 w-full flex items-center flex-col gap-3">
            <Avatar isBordered color="secondary" className="dark:border-purple-500" src={avatarImage} />
            <p className="font-semibold dark:text-white text-black">welcome back !!</p>
           </div>
         </div>
       </form>
       <ToastContainer />
    </div>
  )
}

export default Login
