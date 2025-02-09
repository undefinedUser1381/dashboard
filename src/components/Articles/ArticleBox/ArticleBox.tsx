import Src from "../../../assets/images/pexels-suzyhazelwood-1629236-min.jpg"
import { MdDelete } from "react-icons/md";
import { ArticleType } from "@/interfaces/article";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/stores/store";
import { deleteArticle } from "@/stores/features/articles";

function ArticleBox({title , author , imgSrc , description , category , duration , id} : ArticleType) {

  const dispatch : AppDispatch = useDispatch()

  return (
    <div className="w-full md:w-[48%] mx-auto xl:mx-0 xl:w-[32%] bg-white shadow-lg h-full rounded-md dark:bg-[#24303F]">
       <div className="w-full relative h-[10rem]">
         <img src={`${imgSrc ? imgSrc : Src}`} className="w-full h-full object-cover" alt="" />
         <div onClick={() => dispatch(deleteArticle(id))} className="absolute left-3 bg-gray-400 dark:bg-[#24303F] top-3 rounded-full flex items-center justify-center p-1 cursor-pointer">
           <MdDelete className="text-red-500"/>
         </div>
       </div>
       <div className="flex gap-3 mt-3 p-3 flex-col">
         <h4 className="dark:text-white text-black">{title}</h4>
         <p className="dark:text-gray-300 text-black font-medium">{description}</p>
         <div className="flex items-center child:text-[0.8rem] justify-between">
          <p className="text-black font-medium dark:text-gray-500">{category}</p>
          <p className="text-black font-medium dark:text-gray-500">{author}</p>
       </div>
       <div className="flex *:text-[0.8rem] *:font-medium items-center justify-between">
          <p className="text-blue-600">Duration</p>
          <span className="text-blue-600">{duration} min</span>   
        </div>
      </div>
    </div>
  )
}

export default ArticleBox