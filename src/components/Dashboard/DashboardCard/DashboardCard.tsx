import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";

interface DashboardCardProps {
    icon : React.ReactNode
    price : string
    text : string 
    isBenefit : boolean
    benefit : string
}

function DashboardCard({ text , benefit , icon , price , isBenefit } : DashboardCardProps) {
  return (
    <div className="dark:bg-[#24303F] shadow-lg w-full rounded-sm bg-[#FFFFFF] md:w-[48%] lg:w-[23%] px-5 py-5">
       <div className="w-full">
         <div className="rounded-[50%] w-9 h-9 dark:bg-[#313D4A] p-2 flex items-center justify-center bg-[#EFF2F7]">
            {icon}
         </div>
         <h4 className="text-black dark:text-white mt-4 font-medium text-[1.4rem]">{price}</h4>
         <div className="flex items-center justify-between mt-3">
           <p className="dark:text-secondary text-[0.8rem] text-black">{text}</p>
            {isBenefit ? (
              <div className="text-green-500 font-medium flex items-center text-[0.8rem] justify-center">
                <p>{benefit}</p>
                <IoIosArrowRoundUp />
              </div>
              ) : (
              <div className="text-blue-500 font-medium flex items-center text-[0.8rem] justify-center">
                 <p>{benefit}</p>
                 <IoIosArrowRoundDown />
              </div>
            )}
         </div>
       </div>
    </div>
  )
}

export default DashboardCard