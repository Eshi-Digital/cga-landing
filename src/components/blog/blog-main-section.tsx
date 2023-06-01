import Image from "next/image";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdLocationCity } from "react-icons/md";
import Logo from "../../../public/static/images/logo_only.png";
import BlogCard from "./blog-card";
import { useState } from "react";

interface BlogCardProp {
  id: string;
  description: string;
}
const BlogMainSecton = () => {
  const blogs = [
    {
      id: "1",
      description:
        "Loredm ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, eius facere! Tempora, quis recusandae. Laborum ea perspiciatis ipsum culpa et aut dolores! Magnam vero nisi accusamus dolores neque, at aperiam unde officiis facilis animi voluptatibus sed, architecto adipisci excepturi obcaecati iure cumque",
    },
    {
      id: "2",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, eius facere! Tempora, quis recusandae. Laborum ea perspiciatis ipsum culpa et aut dolores! Magnam vero nisi accusamus dolores neque, at aperiam unde officiis facilis animi voluptatibus sed, architecto adipisci excepturi obcaecati iure cumque",
    },
    {
      id: "3",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, eius facere! Tempora, quis recusandae. Laborum ea perspiciatis ipsum culpa et aut dolores! Magnam vero nisi accusamus dolores neque, at aperiam unde officiis facilis animi voluptatibus sed, architecto adipisci excepturi obcaecati iure cumque",
    },
  ];

  const [blog, setBlog] = useState<BlogCardProp>(blogs[0]);

  return (
    <div className="max-w-7xl mx-auto">
      <p className="px-8 py-10">{blog.description}</p>
      <div className="mt-16 grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-10 py-4 md:py-0">
        {blogs.map((e) => {
          return (
            <div
              className={`${
                blog.id == e.id && "border-2 border-dashed border-primary"
              } cursor-pointer`}
              onClick={() => {
                setBlog(e);
              }}
            >
              <BlogCard />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogMainSecton;
