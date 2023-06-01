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

  const { fetchNewsLoading, news } = useSelector((state: any) => state.news);

  useEffect(() => {
    dispatch(fetchNewsAsync());
  }, []);

  return (
    <div className="max-w-7xl mx-auto mb-10">
      <p className="px-8 py-10">{news[0].description}</p>
      <div className="mt-16 grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-10 py-4 md:py-0">
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
    </div>
  );
};

export default BlogMainSecton;
