import ComponentLayout from "@/layout/ComponentLayout"
import TitleLink from "../shared/TitleLink/TitleLink"
import NotificationBox from "./NotificationBox/NotificationBox"

function Notification() {


  const notifs = [
    {id:1 , name : "Seyed Naghi" , isAnswerd : true , isOnline : false , desc : "React-developer with around 2 years experience" , date : "2025/4/5" , sent : "5 min ago"},
    {id:2 , name : "Seyed Soltan" , isAnswerd : false , isOnline : false , desc : "Shef with around 2 years experience" , date : "2025/4/5" , sent : "10 min ago"},
    {id:3 , name : "Seyed Erfan" , isAnswerd : true , isOnline : true , desc : "React-developer with around 2 years experience" , date : "2025/4/5" , sent : "7 min ago"},
    {id:4 , name : "Seyed Ali" , isAnswerd : false , isOnline : true , desc : "Engenieer with around 2 years experience" , date : "2025/4/5" , sent : "4 min ago"},
    {id:5 , name : "Seyed Mamad" , isAnswerd : false , isOnline : false , desc : "Barber with around 2 years experience" , date : "2025/4/5" , sent : "6 min ago"}
  ];

  return (
    <ComponentLayout>
      <div className="px-[1rem] lg:px-[6rem] xl:px-[8rem] py-[2rem] xl:py-[3rem] w-full ml-auto mt-20 lg:w-[77%] xl:w-[85%]">
       <TitleLink title="Notification" link="/" />
       <div className="dark:bg-[#24303F] shadow-lg mt-8 bg-white p-5 rounded-md">
        <h4 className="dark:text-white text-black mb-5 font-medium">All notifications</h4>
         {
           notifs?.map(notif => (
             <NotificationBox key={notif.id} {...notif}/>
           )) 
         }
       </div>
      </div>
    </ComponentLayout>
  )
}

export default Notification