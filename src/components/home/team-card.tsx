import Image from "next/image";
import News from "../../../public/static/images/news.png";

const TeamCard = () => {
  return (
    <div className="flex flex-col md:flex-row rounded-md shadow-md p-4 w-full sm:w-1/3 md:w-[600px] gap-4 flex-shrink-0">
      <div className="">
        <Image
          src={News}
          alt="news"
          className="rounded-lg w-full md:w-[300px]"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-left font-poppins-regular">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col items-start">
            <div className="font-poppins-medium text-md">Kifle Yirga</div>
            <div className="font-poppins-regular text-gray-500 text-sm">
              President
            </div>
          </div>
          <div className="text-gray-400 text-sm">Read More</div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
