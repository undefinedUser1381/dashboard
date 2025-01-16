import { NavLink } from "react-router-dom";
import sideBarLogo from "../../../assets/images/sidebarlogo/logo.svg";
import { useSelector , useDispatch} from "react-redux";
import { RootState , AppDispatch} from "@/stores/store";
import { closeSideBar } from "@/stores/features/sidebar";
import SideBarLink from "../SideBarLink/SideBarLink";
import { CiGrid41 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { LuListTodo } from "react-icons/lu";
import { BiSolidWalletAlt } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { MdOutlineTableRows } from "react-icons/md";

function MobileSidebar() {

    const dispatch : AppDispatch = useDispatch();
    const isOpen = useSelector((state : RootState) => state.sidebar.isOpen)

  return (
    <aside className={`w-[15rem] dark:bg-[#24303F] bg-primary transition-all z-20 fixed top-0 bottom-0 ${isOpen ? "left-0" : "left-[-25rem]"} left-0 overflow-hidden h-[100vh]`}>
    <div className="pt-6 pl-4 h-full pr-5">
      <div className="flex items-center gap-4 justify-between">
        <img src={sideBarLogo} className="w-[10rem] h-[3rem]" alt="" />
        <div onClick={() => dispatch(closeSideBar())} className="cursor-pointer">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 block lg:hidden font-bold text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
       </div>
      </div>
      <div className="mt-16">
        <h4 className="text-secondary font-bold text-[0.9rem]">MENU</h4>
        <div className="flex child:text-[0.9rem] child:rounded-lg child:text-[#DEE4EE] child:font-medium child:w-full child:transition-all child:px-2 child-hover:bg-[#333A48] flex-col gap-2 mt-3">
          <SideBarLink title="Dashboard" path="/" className={"flex items-center justify-start gap-3"} icon={<CiGrid41 className="w-6 h-6 font-bold"/>} />
          <SideBarLink icon={<CiUser className="w-6 h-6 font-bold"/>} path="/profile" title="Profile" className={"flex items-center justify-start gap-3"}/>
          <SideBarLink icon={<LuListTodo className="w-6 h-6 font-bold"/>} path="/tasks" className={"flex items-center justify-start gap-3"} title="Tasks"/>
          <SideBarLink icon={<BiSolidWalletAlt className="w-6 h-6 font-bold"/>} title="Wallet" path="/wallet" className={"flex items-center justify-start gap-3"}/>
          <SideBarLink className="flex items-center justify-start gap-3" path="/messages" title="Messages" icon={<TiMessages className="font-bold w-6 h-6" />}/>
          <SideBarLink icon={<MdOutlineTableRows className="font-bold w-6 h-6"/>} path="/tables" title="Tables" className="flex items-center justify-start gap-3"/>
        </div>
      </div>
      <div className="px-3 hover:bg-red-500 hover:text-primary rounded-lg py-3 cursor-pointer transition-all pr-5 text-red-400 flex items-start gap-3 mt-10">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
         </svg>
        <button className="pr-5">Logout</button>
      </div>
    </div>
  </aside>
  )
}

export default MobileSidebar