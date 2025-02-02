import Src from "../../../assets/images/pexels-suzyhazelwood-1629236-min.jpg"
import { MdDelete } from "react-icons/md";

interface ArticleBox {
    title : string
    author : string 
    src : string 
    desc : string
    category : string
}

function ArticleBox({title , author , src , desc , category} : ArticleBox) {
  return (
    <div className="w-full md:w-[48%] mx-auto xl:mx-0 xl:w-[32%] bg-white shadow-lg rounded-md dark:bg-[#24303F]">
       <div className="w-full relative h-full">
         <img src={`${src === "" ? Src : src}`} className="w-full h-full object-cover" alt="" />
         <div className="absolute left-3 bg-white top-3 rounded-full flex items-center justify-center p-1 cursor-pointer">
           <MdDelete className="text-red-500"/>
         </div>
       </div>
       <div className="flex gap-3 mt-3 p-3 flex-col">
         <h4 className="dark:text-white text-black">{title}</h4>
         <p className="dark:text-gray-300 text-black font-medium">{desc}</p>
         <div className="flex items-center child:text-[0.8rem] justify-between">
            <p className="text-black font-medium dark:text-gray-500">{category}</p>
            <p className="text-black font-medium dark:text-gray-500">{author}</p>
         </div>
       </div>
    </div>
  )
}

export default ArticleBox