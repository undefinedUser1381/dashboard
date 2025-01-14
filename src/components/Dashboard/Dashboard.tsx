import Header from "../Header/Header"
import SideBar from "../SideBar/SideBar"
import DashboardCard from "./DashboardCard/DashboardCard";
import { IoEyeOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { FiShoppingBag } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import DashboardAreaChart from "./DashboardAreaChart/DashboardAreaChart";
import DashboardTooltipChart from "./DashboardTooltipChart/DashboardTooltipChart";
import DashboardPieChart from "./DashboardPieChart/DashboardPieChart";
import TopChannel from "../TopChannel/TopChannel";
import Chats from "../Chats/Chats";

function Dashboard() {
  return (
    <section className="w-[100%] flex items-start justify-between font-bold">
      <SideBar />
      <section className="w-full min-h-screen bg-[#F1F5F9] dark:bg-[#1A222C]">
      <Header />
        <div className="p-4 md:p-10 w-full ml-auto mt-20 lg:w-[77%] xl:w-[83%]">
          <div className="flex flex-col gap-4 md:gap-6 md:flex-row md:flex-wrap lg:flex-nowrap lg:gap-1 items-center justify-between w-full">
             <DashboardCard text="Total views" price={"$3.456K"} icon={<IoEyeOutline className="dark:text-white text-blue-500 w-5 h-5"/>} isBenefit={true} benefit="0.43%" />
             <DashboardCard text="Total profit" price={"$45,2K"} icon={<SlBasket className="dark:text-white text-blue-500 w-5 h-5"/>} isBenefit={true} benefit="4.35%" />
             <DashboardCard text="Total Product" price={"2.450"} icon={<FiShoppingBag className="dark:text-white text-blue-500 w-5 h-5"/>} isBenefit={true} benefit="2.59%" />
             <DashboardCard text="Total Users" price={"3.456"} icon={<FaUsers className="dark:text-white text-blue-500 w-5 h-5"/>} isBenefit={false} benefit="0.95%" />
          </div>
          <div className="flex flex-col xl:flex-row items-start justify-between">
             <DashboardPieChart />
             <DashboardTooltipChart />
          </div>
          <DashboardAreaChart />
          <div className="flex h-auto flex-col xl:h-[40rem] xl:flex-row items-start justify-between w-full">
            <TopChannel />
            <Chats />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Dashboard;
