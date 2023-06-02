import Image, { StaticImageData } from "next/image";
import News from "../../../public/static/images/news.png";




interface TeamCardProps {
  name: string;
  role: string;
  detail: string;
  image:StaticImageData;
}
const TeamCard = ({name,role,detail,image}:TeamCardProps) => {
  return (
    <div className="flex flex-col md:flex-row rounded-md shadow-md p-4 w-full sm:w-1/3 md:w-[600px] gap-4 flex-shrink-0">
      <div className="">
        <Image
        width={300}
          src={image}
          alt="news"
          className="rounded-lg w-full md:w-[300px]"
        />
      </div>
      <div className="flex flex-col justify-between w-[500px]">
        <div className="text-left font-poppins-regular">
         {detail}
        </div>
        <div className="flex justify-between w-full items-end">
          <div className="flex flex-col items-start">
            <div className="font-poppins-medium text-md">{name}</div>
            <div className="font-poppins-regular text-gray-500 text-sm">
             {role}
            </div>
          </div>
          <div className="text-gray-400 text-sm">Read More</div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
