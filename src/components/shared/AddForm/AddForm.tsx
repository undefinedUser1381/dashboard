import { useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";

interface AddFormProp {
    children : React.ReactNode
    title : string
    // onsubmit : () => void
    onClose : () => void
}

export default function AddForm({ children , title , onClose  } : AddFormProp) {

    // Add Escape key event and remove this effect
    useEffect(() => {
        const exitForm = (e) => {
            if(e.key === "Escape"){
                onClose();
            }
        };
        window.addEventListener("keydown" , exitForm);
        return () => {
            window.removeEventListener("keydown" , exitForm);
        };
     },[])

  return (
    <section className="fixed z-40 top-0 left-0 bottom-0 right-0 w-[100%] flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
     <form className="dark:bg-[#24303F] bg-white shadow-md rounded-lg w-[80%] md:w-[70%] p-5 flex flex-col items-start sm:w-[50%] justify-start gap-10 h-auto">
       <div className="flex w-full items-center justify-between">
        <h3 className="dark:text-white text-black font-medium">{title}</h3>
        <MdOutlineCancel onClick={onClose} className="w-5 h-5 text-red-500 cursor-pointer"/>
       </div>
       <div className="flex w-full gap-5 flex-col items-center">
        {children}
       </div>
     </form>
    </section>
  )
}
