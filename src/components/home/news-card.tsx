import Image from "next/image";
import News from "../../../public/static/images/news.png";

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
    </div>
  );
};

export default NewsCard;
