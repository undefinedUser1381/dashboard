import RightSection from "./RightSection/RightSection"
import LeftSection from "./LeftSection/LeftSection"

function Header() {
  return (
    <nav className="flex px-4 py-4 fixed z-10 right-0 top-0 bg-white dark:bg-[#24303F] shadow-md w-full lg:w-[79%] xl:w-[82.8%] items-center justify-between">
        <LeftSection />
        <RightSection />
    </nav>
  )
}

export default Header