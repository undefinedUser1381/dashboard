import Header from "@/components/shared/Header/Header"
import SideBar from "@/components/shared/SideBar/SideBar"

interface ComponentLayout {
    children : React.ReactNode
}

function ComponentLayout({ children } : ComponentLayout) {
  return (
    <section className="w-[100%] flex items-start justify-between font-bold">
    <SideBar />
     <section className="w-full min-h-screen bg-[#F1F5F9] dark:bg-[#1A222C]">
      <Header />
       {children}
     </section>  
   </section>
  )
}

export default ComponentLayout