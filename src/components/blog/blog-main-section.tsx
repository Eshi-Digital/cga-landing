import Image from "next/image";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdLocationCity } from "react-icons/md";
import Logo from "../../../public/static/images/logo_only.png";
import BlogCard from "./blog-card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsAsync } from "@/store/features/news/news.slice";
import NewsCard from "../home/news-card";

interface NewsProp {
  author: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogMainSecton = () => {
  const dispatch = useDispatch<any>();

  const [newses, setNews] = useState<NewsProp[]>();

  const { fetchNewsSuccess, fetchNewsLoading, news } = useSelector(
    (state: any) => state.news
  );

  useEffect(() => {
    dispatch(fetchNewsAsync());
  }, []);

  useEffect(() => {
    if (fetchNewsSuccess) {
      setNews(news);
    }
  }, [fetchNewsSuccess]);

  return (
    <div className="max-w-7xl mx-auto mb-10">
      <p
        className="px-8 py-10"
        dangerouslySetInnerHTML={{
          __html: newses?.length == 0 ? "loading..." : newses![0].content,
        }}
      ></p>
      <div className="mt-16 grid gap-10 py-4 md:py-0">
        {newses?.length == 0 ? (
          <div className="text-md">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 w-full md:max-w-7xl flex-col md:flex-row">
            {newses!.map((item: any) => (
              <div
                className={`${
                  item.id == e.id && "border-2 border-dashed border-primary"
                } cursor-pointer`}
                onClick={() => {
                  setEvent(e);
                }}
              >
                <NewsCard
                  key={item.id}
                  image={item.image}
                  author={item.author}
                  title={item.title}
                  content={item.content}
                  publishedDate={item.publishedDate}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogMainSecton;
