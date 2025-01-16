import { useState } from "react"
import profileImg from "../../../assets/images/signup/bg-01.jpg"
import ProfileDropDown from "./ProfileDropDown/ProfileDropDown"
import { useSelector , useDispatch } from "react-redux"
import { RootState , AppDispatch } from "@/stores/store"
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { toggleTheme } from "@/stores/features/theme"

function RightSection() {

  const [isDropDownActive , setIsDropDownActive] = useState<Boolean>(false)
  const dispatch : AppDispatch = useDispatch()
  const themeMode = useSelector((state : RootState) => state.theme.isDarkMode);

  console.log(themeMode);

  return (
    <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-3">
            <div onClick={() => dispatch(toggleTheme())} className={`cursor-pointer duration-400 w-14 rounded-xl p-1 h-7 relative flex items-center justify-start ${themeMode ? "dark:bg-blue-500" : "bg-[#E2E8F0]"}`}>
              <div className={`rounded-[70%] ${themeMode ? "translate-x-[1.6rem]" : ""} absolute duration-250 transition-all shadow-lg w-[1.4rem] h-5 flex items-center justify-center p-1 bg-white`}>
                {
                  themeMode ? (
                   <IoMoonOutline />
                  ) : (
                    <IoSunnyOutline />
                  )
                }
              </div>
            </div>
            <div className="rounded-[50%] dark:text-white flex items-center justify-center p-2 w-9 h-9 bg-[#EFF4FB] dark:bg-[#313D4A]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
             </svg>
            </div>
            <div className="rounded-[50%] dark:text-white flex items-center justify-center p-2 w-9 h-9 bg-[#EFF4FB] dark:bg-[#313D4A]">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
             </svg>
            </div>
            <div onClick={() => setIsDropDownActive(prev => !prev)} className="flex relative cursor-pointer items-center justify-center gap-3">
                <div className="hidden lg:flex items-end child:text-[0.7rem] flex-col gap-1">
                    <p className="font-bold dark:text-white">Seyed Erfan</p>
                    <p className="text-gray-400">Front-Developer</p>
                </div>
                <div className="rounded-[50%] w-12 h-12 overflow-hidden">
                  <img src={profileImg} className="object-cover w-full h-full" alt="" />
                </div>
                <div className="hidden lg:flex text-gray-400">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                {
                  isDropDownActive && <ProfileDropDown />
                }
            </div>
        </div>
    </div>
  )
}

export default RightSection