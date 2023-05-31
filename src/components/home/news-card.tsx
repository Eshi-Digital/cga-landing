import Image from "next/image";
import News from "../../../public/static/images/news.png";

const NewsCard = () => {
  return (
    <div className="flex flex-col gap-4 items-center w-full rounded-lg shadow-lg pb-10 px-4">
      <Image src={News} alt="News" className="w-full" />
      <div className="flex gap-4 text-gray-500 text-sm">
        <div>By: Admin</div>
        <div>06 Aug 2017</div>
        <div>Wordpress</div>
      </div>
      <div>
        <h2 className="text-xl font-poppins-medium">
          48 Best WordPress Themes
        </h2>
      </div>
      <div>
        <p className="text-center line-clamp-3">
          Lorem ipsum dolor sit asdad sdad asdsadsa afef dsa afef dsa afefdsa
          afefdsa afef dsa afef dsa afef dsa afef dsa afef dsa afef dsa afef dsa
          afef dsa afef
        </p>
      </div>
      <div>
        <div className="bg-primary text-white rounded-full px-10 py-2 text-sm">
          Read More
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
