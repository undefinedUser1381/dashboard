interface ChatProps {
    src : string 
    isonline : boolean
    name : string 
    sent : number
    message : string
    hasMessages : boolean
    messageCount : string
}

function ChatBox({src , name , isonline , sent , message , hasMessages , messageCount} : ChatProps) {
  return (
     <div className="mb-4 p-3 hover:bg-gray-100 dark:hover:bg-[#313D4A] cursor-pointer w-full">
      <div className="flex items-center justify-between xl:justify-center w-full gap-4">
        <div className="relative">
         <div className="rounded-full w-[3rem] h-[3rem] overflow-hidden">
            <img src={src} className="w-full h-full"/>
            {isonline ? (<div className="absolute w-3 h-3 border-1 bg-green-600 left-9 top-8 rounded-full"></div>) : (<div className="absolute w-3 h-3 border-1 bg-red-600 left-9 top-8 rounded-full"></div>)}
         </div>
        </div>
        <div className="flex flex-col items-start w-full xl:w-[10rem]">
            <p className="dark:text-white font-normal text-black text-[1rem]">{name}</p>
            <div className="flex items-center justify-center gap-2">
              <p className="text-black font-normal dark:text-white text-[0.9rem]">{message}</p>
              <p className="text-gray-400 font-normal text-[0.7rem]">{sent} min .</p>
            </div>
          </div>
          {
            hasMessages ? (
             <div className="w-[2rem] h-5 sm:w-6 sm:h-6 bg-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">{messageCount}</span>
             </div>
            ) : (
              <div className="w-6 h-6"></div>
            )
         } 
      </div>
    </div>
  )
}

export default ChatBox