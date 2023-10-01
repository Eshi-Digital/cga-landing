import { MdArrowRight } from "react-icons/md";
import NewsCard from "./news-card";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNewsAsync } from "@/store/features/news/news.slice";
import { AiFillRightCircle } from "react-icons/ai";

const NewsSection = () => {
  const router = useRouter();
  const dispatch = useDispatch<any>();

  const { fetchNewsLoading, news } = useSelector((state: any) => state.news);

  useEffect(() => {
    dispatch(fetchNewsAsync());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col gap-12 items-center max-w-5xl mx-auto pb-8">
      <div className="text-4xl">Latest News</div>
      {fetchNewsLoading ? (
        <div className="text-md">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:max-w-7xl flex-col md:flex-row">
          {news.map((item: any) => (
            <NewsCard
              key={item.id}
              image={item.image}
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
        <div className="rounded-full flex items-center justify-center hover:bg-gray-400 transition duration-300 ease-in-out">
          <AiFillRightCircle size={40} className="text-primary" />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
