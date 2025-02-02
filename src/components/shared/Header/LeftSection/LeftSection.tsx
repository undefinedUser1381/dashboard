import MobileLogo from "../../../../assets/images/logo-icon.svg"
import { useDispatch } from "react-redux" 
import { AppDispatch} from "../../../../stores/store"
import { openSideBar } from "../../../../stores/features/sidebar"

function LeftSection() {
  
  const dispatch : AppDispatch = useDispatch();

  return (
    <>
      <div className="flex lg:hidden items-center justify-center gap-3">
        <div onClick={() => dispatch(openSideBar())} className="text-gray-500 cursor-pointer font-bold dark:text-white">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div className="w-6 h-6">
            <img src={MobileLogo} alt="" />
          </div>
      </div>
      <div className="w-[45%] hidden sm:flex items-center justify-start gap-3 pl-4 text-gray-400">
        <div>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
         </svg>
        </div>
        <input className="bg-transparent outline-none p-1 w-full font-semibold" type="text" placeholder="Type to search" name="" id="" />
      </div>
    </>
  )
}

export default LeftSection