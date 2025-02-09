import ComponentLayout from "@/layout/ComponentLayout";
import TitleLink from "../shared/TitleLink/TitleLink";
import ArticleBox from "./ArticleBox/ArticleBox";
import AddForm from "../shared/AddForm/AddForm";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/stores/store";
import {Alert} from "@heroui/alert";
import { getArticles, postArticles } from "@/stores/features/articles";
import { SubmitHandler } from "react-hook-form";
import { Oval, Puff } from "react-loader-spinner";
import { IoDocumentsOutline } from "react-icons/io5";
import { articleShema } from "@/validation/article";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArticleType } from "@/interfaces/article";

function Articles() {

  const dispath : AppDispatch = useDispatch()
  const isLoading = useSelector((state : RootState) => state.articles.isLoad)
  const isLoadPost = useSelector((state : RootState) => state.articles.isLoadPost)
  const articles = useSelector((state : RootState) => state.articles.articles)
  const [openFormModal , setisOpenFormModal] = useState<boolean>(false)

  useEffect(() => {
    dispath(getArticles("articles"))
  },[])
  
  const closeForm = () => {
    setisOpenFormModal(false)
  }

  const openForm = () => {
    setisOpenFormModal(true)
}

const submitArtilce : SubmitHandler<ArticleType> = (articleData) => {
  dispath(postArticles({...articleData}))
}

const { handleSubmit , register , formState : { errors } } = useForm({
  resolver : yupResolver(articleShema)
})

  return (
    <>
     <ComponentLayout>
      <div className="px-[1rem] lg:px-[6rem] xl:px-[8rem] py-[2rem] xl:py-[3rem] w-full ml-auto mt-20 lg:w-[77%] xl:w-[83%]">
        <TitleLink title="Articles" link="/" />
        <div className="mt-8">
         <div className="w-full mb-10 p-4 mt-5 flex font-medium items-center justify-between bg-[#24303F]">
             <h4 className="dark:text-white text-black">Add Article</h4>
             <button onClick={openForm} className="bg-blue-600 px-5 border-none outline-none py-2 text-white rounded-md cursor-pointer">Add Article</button>
          </div>
          {
           isLoading ? (
            <div className="text-center mt-5 flex items-center justify-center">
              <Puff visible={true} height="40" width="40" color="#3B82F6" ariaLabel="puff-loading" wrapperStyle={{}} wrapperClass="" />
            </div> 
           ) : (
          <div className="mt-10 lg:mt-5 flex items-start gap-4 flex-col md:flex-row md:flex-wrap">
          {
            articles.length ? (
             articles.map((article) => (
              <ArticleBox
               key={article.id}
               {...article}
             />
             ))
             ) : (
              <Alert color="danger" title="No articles exit !"/>
              )
             }
            </div>
           )
          }
        </div>
      </div>
      { 
        openFormModal && 
        <AddForm onClose={closeForm} onSubmit={handleSubmit(submitArtilce)} title="Add Article">
          <input type="text" name="title" {...register("title")} className="input_form" placeholder="Title ..."/>
          {errors.title && <span className="w-full bg-red-400 text-white font-medium rounded-md p-1">{errors.title.message}</span>}
          <input type="text" name="src" {...register("imgSrc")} className="input_form" placeholder="Source ..."/>
          {errors.imgSrc && <span className="w-full bg-red-400 text-white font-medium rounded-md p-1">{errors.imgSrc.message}</span>}
          <input type="text" name="desc" {...register("description")} className="input_form" placeholder="Description ..." />
          {errors.description && <span className="w-full bg-red-400 text-white font-medium rounded-md p-1">{errors.description.message}</span>}
          <input type="text" name="duration" {...register("duration")} className="input_form" placeholder="Duration ..." />
          {errors.duration && <span className="w-full bg-red-400 text-white font-medium rounded-md p-1">{errors.duration.message}</span>}
          <input type="text" name="author" {...register("author")} className="input_form" placeholder="Author ..." />
          {errors.author && <span className="w-full bg-red-400 text-white font-medium rounded-md p-1">{errors.author.message}</span>}
          <div className="flex flex-col gap-2 w-full">
           <label className="dark:text-white text-black font-medium text-[0.8rem]" htmlFor="">Select Category</label>
           <select {...register("category")} name="category" className="w-[100%] bg-gray-800 border-gray-500 dark:text-white text-black border focus:border-blue-400 transition-all font-medium p-2" id="">
           <option value={"Front-End"}>Front-End</option>
           <option value={"Back-End"}>Back-End</option>
           <option value={"Programming"}>Programming</option>
          </select>
         </div>
         {errors.category && <span className="w-full bg-red-400 text-white font-medium rounded-md p-1">{errors.category.message}</span>}
         <div className="w-full flex items-center justify-center md:justify-end mt-2">
           <button className="bg-green-500 flex items-center justify-center gap-2 p-2 font-medium text-white w-[100%] rounded-lg sm:w-[50%] md:w-[25%] lg:w-[20%] xl:w-[15%]">
           {
             isLoadPost ? (
               <Oval visible={true} color="#fff" height="25" width="25" ariaLabel="oval-loading" wrapperStyle={{}} wrapperClass="" />
             ) : (
              <>
               <IoDocumentsOutline />
               Add Article
              </>
             )
           }
           </button>
         </div>
        </AddForm>
      }
     </ComponentLayout>
    </>
  );
}

export default Articles;
