import Image from "next/image";
import { AiFillRightCircle } from "react-icons/ai";
import { useRouter } from "next/router";

interface NewsProp {
  author: string;
  image: string;
  title: string;
  content: string;
  publishedDate: string;
}

const NewsCard = ({
  author,
  title,
  image,
  content,
  publishedDate,
}: NewsProp) => {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <div className="max-h-96 flex flex-col gap-4 items-center w-full rounded-lg shadow-lg pb-10 px-4">
      <Image
        width={300}
        height={200}
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/news/${image}`}
        alt="News"
        className="w-full"
      />
      <div className="flex flex-col justify-between w-full text-gray-500 text-sm">
        <div className="text-end">
          {new Date(publishedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <div className="text-justify">By: {author}</div>
      </div>
      <div className="text-center">
        <span className="text-lg">
          {title.length > 50 ? title.slice(0, 50) + "..." : title}
        </span>
      </div>
      <div>
        <span
          className="text-gray-500 text-sm text-center line-clamp-3"
          dangerouslySetInnerHTML={{
            __html:
              content.length > 150 ? content.slice(0, 150) + "..." : content,
          }}
        ></span>
      </div>
      <div
        className={`flex gap-4 justify-end items-center w-full cursor-pointer ${
          router.pathname === "/blog" ? "hidden" : "flex"
        }`}
        onClick={() => {
          router.push("/blog");
        }}
      >
        <span>See more</span>
        <div className="rounded-full flex items-center justify-center hover:bg-gray-400 transition duration-300 ease-in-out">
          <AiFillRightCircle size={24} className="text-primary" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
