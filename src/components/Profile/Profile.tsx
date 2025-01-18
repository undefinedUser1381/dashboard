import SideBar from "../SideBar/SideBar"
import Header from "../Header/Header"
import ProfileContent from "./ProfileContent/ProfileContent"
import ProfileHeader from "./ProfileHeader/ProfileHeader"


function Profile() {
  return (
    <section className="w-[100%] flex items-start justify-between font-bold">
     <SideBar />
      <section className="w-full min-h-screen bg-[#F1F5F9] dark:bg-[#1A222C]">
       <Header />
       <div className="px-[1rem] lg:px-[6rem] xl:px-[8rem] py-[2rem] xl:py-[3rem] w-full ml-auto mt-20 lg:w-[77%] xl:w-[83%]">
        <ProfileHeader />
        <ProfileContent />
       </div>
      </section>  
    </section>
  )
}

export default Profile