import ChatBox from "./ChatBox/ChatBox"
import profSrc from "../../assets/images/users/user-01.webp"
import profSrc1 from "../../assets/images/users/user-02.webp"
import profSrc2 from "../../assets/images/users/user-04.webp"
import profSrc3 from "../../assets/images/users/user-05.webp"

function Chats() {
  return (
    <div className="dark:bg-dark h-[100%] shadow-lg bg-[#FFFFFF] mt-6 w-full xl:w-[30%]">
     <div className="dark:bg-dark bg-[#FFFFFF] py-4 px-6">
       <h3 className="font-medium text-black dark:text-white text-[1.1rem]">Chats</h3>
     </div>
     <ChatBox name="David Heilo" message="How are u ?" isonline={true} src={profSrc} sent={12} hasMessages={true} messageCount="3"/>
     <ChatBox name="Erfan Ghezi" message="Where are u ?" isonline={true} src={profSrc1} sent={22} hasMessages={true} messageCount="5"/>
     <ChatBox name="Amir Motori" message="Barname konim ?" isonline={true} src={profSrc2} sent={44} hasMessages={true} messageCount="2"/>
     <ChatBox name="Hossein Jan" message="Chetori to?" isonline={false} src={profSrc2} sent={16} hasMessages={false} messageCount="2"/>
     <ChatBox name="Soltan Jan" message="Soltanami" isonline={false} src={profSrc3} sent={32} hasMessages={false} messageCount="2"/>
     <ChatBox name="Amir Motori" message="Barname konim ?" isonline={true} src={profSrc2} sent={44} hasMessages={true} messageCount="2"/>
    </div>
  )
}

export default Chats