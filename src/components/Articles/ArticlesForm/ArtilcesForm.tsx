import Input from "@/components/Input/Input"

function ArtilcesForm() {
  return (
    <form className="bg-[#FFFFFF] shadow-lg p-5 mt-5 w-full dark:bg-[#24303F]">
      <div className="flex w-full flex-wrap gap-3">
       <Input placeholder="title..." name="title"/>
       <Input placeholder="description..." name="desc"/>
       <Input placeholder="author..." name="author"/>
       <Input placeholder="link..." name="link"/>
       <Input placeholder="category..." name="category"/>
      </div>
      <div className="sm:w-[20%] md:w-[25%] lg:w-[20%] xl:w-[18%] w-full text-white mb-1 mx-auto">
       <div className="w-full transition-all hover:opacity-70 flex items-center justify-center gap-2 mt-6 p-2 font-medium bg-green-500">
        <button className="" type="submit">Add Article</button>
       </div>
      </div>
    </form>
  )
}

export default ArtilcesForm