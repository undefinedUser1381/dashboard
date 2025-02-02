import Image from "../../../assets/images/profile/user-06.webp"

interface NotificationProp {
    isOnline : boolean
    isAnswerd : boolean
    sent : string
    desc : string
    name : string
    date : string
}

function NotificationBox({isOnline , isAnswerd , sent , desc , name , date} : NotificationProp) {
  return (
    <div className={`dark:bg-[#24303F] flex flex-col gap-6 lg:flex-row items-start lg:items-center justify-between lg:gap-3 mt-6 border-l-[5px] ${isAnswerd ? "border-green-500" : "border-red-500"} bg-white rounded-lg p-4`}>
      <div className="flex items-start flex-col lg:flex-row justify-start gap-3">
       <div className="w-12 h-12 relative">
        <img src={Image} alt="" className="w-full h-full object-cover"/>
        <div className={`absolute rounded-full top-0 right-0 w-4 h-4 border-2 ${isOnline ? "bg-green-500" : "bg-red-500"}`}></div>
       </div>
       <div className="flex flex-col gap-1 *:font-medium">
         <h3 className="dark:text-white text-black">{name}</h3>
         <p className="text-gray-400">{desc}</p>
         <span className="text-gray-400">{sent}</span>
       </div>
      </div>
      <div className="dark:bg-[#333A48] bg-[#EFF4FB] dark:text-gray-400 font-medium p-2 text-[0.8rem] text-gray-600 w-[5rem] text-center">
        {date}
      </div>
    </div>
  )
}

export default NotificationBox