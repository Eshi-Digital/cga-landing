import { MdArrowRight } from "react-icons/md";
import NewsCard from "./news-card";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNewsAsync } from "@/store/features/news/news.slice";

const NewsSection = () => {
  const router = useRouter();
  const dispatch = useDispatch<any>();

  const { fetchNewsLoading, news } = useSelector((state: any) => state.news);

  useEffect(() => {
    dispatch(fetchNewsAsync());
  }, []);

  return (
    <div className="flex flex-col gap-12 items-center py-10 md:py-20 max-w-5xl mx-auto">
      <div className="text-3xl">Latest News</div>
      {fetchNewsLoading ? (
        <div className="text-md">Loading...</div>
      ) : (
        <div className="flex gap-8 w-full md:max-w-7xl flex-col md:flex-row">
          {news.map((item: any) => (
            <NewsCard
              key={item.id}
              author={item.author}
              title={item.title}
              content={item.content}
              publishedDate={item.publishedDate}
            />
          ))}
        </div>
      )}

      <div
        className="flex gap-4 justify-end items-center w-full cursor-pointer"
        onClick={() => {
          router.push("/blog");
        }}
      >
        <div>View All</div>
        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
          <MdArrowRight />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
