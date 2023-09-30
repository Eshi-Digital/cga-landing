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
  /**
   * states
   */
  const [newses, setNews] = useState<NewsProp[]>();
  const [singleNews, setSingleNews] = useState<NewsProp | null>(null);

  /**
   * hooks
   */
  const dispatch = useDispatch<any>();

  /**
   * selectors
   */
  const { fetchNewsSuccess, fetchNewsLoading, news } = useSelector(
    (state: any) => state.news
  );

  /**
   * functions
   */

  /**
   * yup validation schema
   */

  /**
   * formik
   */

  /**
   * effects
   */
  useEffect(() => {
    dispatch(fetchNewsAsync());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (news.length > 0) {
      setSingleNews(news[0]);
      setNews(news);
    }
  }, [fetchNewsSuccess]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * variables
   */

  if (fetchNewsLoading || !newses) {
    return <>Loading...</>;
  }

  return (
    <div className="max-w-7xl mx-auto mb-10">
      <div className="mt-16 grid gap-10 py-4 md:py-0">
        {newses?.length == 0 ? (
          <div className="text-md">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 w-full md:max-w-7xl flex-col md:flex-row">
            {newses!.map((item: any) => (
              <div
                key={item.id}
                className={`${
                  singleNews == item.id &&
                  "border-2 border-dashed border-primary"
                } cursor-pointer mx-2`}
                onClick={() => {
                  setSingleNews(item);
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
      <p
        className="px-8 py-10"
        dangerouslySetInnerHTML={{
          __html: singleNews?.content!,
        }}
      ></p>
    </div>
  );
};

export default BlogMainSecton;
