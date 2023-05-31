import { MdArrowRight } from "react-icons/md";
import NewsCard from "./news-card";

const NewsSection = () => {
  return (
    <div className="flex flex-col gap-12 items-center py-10 md:py-20 max-w-5xl mx-auto">
      <div className="text-3xl">Latest News</div>
      <div className="flex gap-8 w-full md:max-w-7xl flex-col md:flex-row">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div className="flex gap-4 justify-end items-center w-full">
        <div>View All</div>
        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
          <MdArrowRight />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
