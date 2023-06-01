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
    <div className="flex flex-col gap-4 items-center w-full rounded-lg shadow-lg pb-10 px-4">
      <Image
        width={300}
        height={200}
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/news/${image}`}
        alt="News"
        className="w-full"
      />
      <div className="flex justify-between w-full text-gray-500 text-sm">
        <div>By: {author}</div>
        <div>
          {new Date(publishedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-poppins-medium">
          {title.length > 50 ? title.slice(0, 50) + "..." : title}
        </h2>
      </div>
      <div>
        <p
          className="text-center line-clamp-3"
          dangerouslySetInnerHTML={{
            __html:
              content.length > 150 ? content.slice(0, 150) + "..." : content,
          }}
        ></p>
      </div>
    </div>
  );
};

export default NewsCard;
