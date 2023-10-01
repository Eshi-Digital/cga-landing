import Image, { StaticImageData } from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  detail: string;
  image: StaticImageData;
}
const TeamCard = ({ name, role, detail, image }: TeamCardProps) => {
  return (
    <div className="flex flex-col md:flex-row rounded-md shadow-md p-4 w-full sm:w-1/3 md:w-[600px] gap-4 flex-shrink-0 border border-gray-100">
      <div className="">
        <Image
          width={300}
          src={image}
          alt="team member"
          className="rounded-lg  h-56 object-fit"
        />
      </div>
      <div className="flex flex-col justify-between md:w-[500px]">
        <div className="text-sm text-justify text-gray-600">{detail}</div>
        <div className="flex justify-between w-full items-end">
          <div className="text-sm flex flex-col items-start">
            <div className="font-poppins-medium text-md">{name}</div>
            <div className="font-poppins-light text-gray-600">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
