import profileImg from "../../../assets/images/profile/cover-01.webp"
import profileImg2 from "../../../assets/images/profile/user-06.webp"
import { CiCamera } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

function ProfileContent() {
  return (
    <div className='flex w-[100%] h-auto bg-white dark:bg-[#24303F] mx-auto mt-5 items-center justify-start flex-col'>
      <div className='w-full hf-ull'>
        <img src={profileImg} className="w-full h-full object-cover" alt="" />
      </div>
      <div className='mt-[-3rem] md:mt-[-5.5rem] flex flex-col items-center'>
        <div className="p-2 bg-[hsla(0,0%,100%,.2)] backdrop-blur w-[7rem] h-[7rem] md:w-[10rem] md:h-[10rem] rounded-full">
         <div className="w-full relative h-full rounded-full overflow-hidden">
          <img src={profileImg2} alt="" className="w-full h-full"/>
         </div>
         <div className="rounded-full text-white flex absolute right-[1.5rem] top-[75%] items-center justify-center w-7 h-7 bg-blue-700">
          <div className="relative cursor-pointer">
             <CiCamera/>
             <input className="w-4 absolute left-0 opacity-0 top-0 cursor-pointer h-4" type="file" name="" id="" />
          </div>
         </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-start mt-5 child:font-medium">
          <h3 className="dark:text-white text-black text-[1.3rem]">Seyed Erfan Ghezi</h3>
          <h4 className="text-gray-400 text-[0.9rem]">Front-End Developer</h4>
        </div>
       </div>
       <div className="dark:bg-[#37404F] p-3 px-4 flex items-center justify-between md:justify-between md:gap-5 bg-white border-2 shadow-md dark:border-none mt-5 mx-auto w-[90%] sm:w-[70%] rounded-lg lg:w-[70%] xl:w-[40%]">
          <div className="child:font-medium flex-col sm:flex-row flex items-center justify-center gap-1">
            <span className="text-black dark:text-white">259</span>
            <span className="text-gray-400">Postssss</span>
          </div>
          <div className="child:font-medium flex-col sm:flex-row items-center justify-center flex gap-1">
            <span className="text-black dark:text-white">129K</span>
            <span className="text-gray-400">Followers</span>
          </div>
          <div className="child:font-medium flex-col items-center sm:flex-row justify-center flex gap-1">
            <span className="text-black dark:text-white">2K</span>
            <span className="text-gray-400">Following</span>
          </div>
       </div>
       <div className="flex flex-col mt-5 mb-7 items-center w-full lg:w-[80%] p-3 justify-start gap-3">
          <h3 className="text-black font-medium dark:text-white">About Me</h3>
          <p className="font-medium text-gray-400 text-center leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies. Sed vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed, aliquam lacus.</p>
       </div>
       <div className="w-full flex-col items-center justify-start px-2 mb-6">
         <h3 className="text-black text-center dark:text-white text-[0.9rem] font-medium">Follow Me On</h3>
          <div className="flex justify-center gap-4 child-hover:text-blue-500 child:transition-all child:cursor-pointer mt-4 text-gray-400 child:w-6 child:h-6 items-center w-[100%]">
            <FaInstagram />
            <FaGithub />
            <FaTelegramPlane />
            <FaPhone />
          </div>
       </div>
    </div>
  )
}

export default ProfileContent