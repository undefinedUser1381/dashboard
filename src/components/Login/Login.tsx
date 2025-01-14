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

function Login() {

document.title = "Dashboard | Login"
const { t } = useTranslation()

 const {
    handleSubmit , 
    register ,
    formState: { errors },
 } = useForm({
    resolver: yupResolver(loginSchema)
 })

const submitUser : SubmitHandler<loginInterface> = (data) => {
   console.log(data);
}

  return (
    <div className="bg-image flex items-center justify-center sm:py-6 sm:px-6 w-full">
       <form onSubmit={handleSubmit(submitUser)} className="bg-white rounded-xl shadow-xl w-[90%] sm:w-[25rem] z-20 h-auto pb-4">
          <h3 className="text-center pt-12 font-bold text-[2rem]">{t("Sign In")}</h3>
          <div className="flex flex-col w-full gap-8 px-3 mt-12 items-center">
          <div className="flex flex-col items-center gap-5 w-[80%]">
           <Input {...register("userName")} label="Username" size="sm" className="shadow-lg rounded-lg" type="username" />
           {errors.userName && <span className="text-white bg-red-500 w-full px-2 py-1 rounded-lg">{errors.userName.message}</span>}
          </div>
          <div className="flex flex-col items-center gap-5 w-[80%]">
           <Input {...register("email")} label="Email" size="sm" className="shadow-lg rounded-lg" type="email" />
           {errors.email && <span className="text-white bg-red-500 w-full px-2 py-1 rounded-lg">{errors.email.message}</span>}
          </div>
           <Button type="submit" color="secondary" className="w-[10rem] p-7 mt-6 shadow-lg font-bold shadow-purple-500 rounded-[5rem]">SIGN IN</Button>
           <div className="mt-12 w-full flex items-center flex-col gap-3">
            <Avatar isBordered color="secondary" src={avatarImage} />
            <p className="font-semibold">welcome back !!</p>
           </div>
         </div>
       </form>
    </div>
  )
}

export default Login
