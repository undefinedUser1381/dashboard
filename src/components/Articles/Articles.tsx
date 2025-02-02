import ComponentLayout from "@/layout/ComponentLayout";
import TitleLink from "../shared/TitleLink/TitleLink";
import ArtilcesForm from "./ArticlesForm/ArtilcesForm";
import ArticleBox from "./ArticleBox/ArticleBox";

function Articles() {
  return (
    <ComponentLayout>
      <div className="px-[1rem] lg:px-[6rem] xl:px-[8rem] py-[2rem] xl:py-[3rem] w-full ml-auto mt-20 lg:w-[77%] xl:w-[83%]">
        <TitleLink title="Articles" link="/" />
        <ArtilcesForm />
        <div className="mt-8">
          <h3 className="text-black text-[1.2rem] dark:text-white">
            All Articles
          </h3>
          <div className="mt-10 lg:mt-5 flex items-center gap-4 flex-col md:flex-row md:flex-wrap">
            <ArticleBox
              title="This is title article"
              desc="This is title article This is title article This is title article This is title article This is title article"
              category="Front-End"
              author="Erfan Ghezi"
              src=""
            />
            <ArticleBox
              title="This is title article"
              desc="This is title article This is title article This is title article This is title article This is title article"
              category="Front-End"
              author="Erfan Ghezi"
              src=""
            />
            <ArticleBox
              title="This is title article"
              desc="This is title article This is title article This is title article This is title article This is title article"
              category="Front-End"
              author="Erfan Ghezi"
              src=""
            />
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
}

export default Articles;
