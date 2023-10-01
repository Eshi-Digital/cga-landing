import Logo from "../../../public/static/images/logo_only.png";
import Image from "next/image";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdLocationCity } from "react-icons/md";

const EventCard = ({
  description,
  location,
  startDate,
  endDate,
}: {
  description: string;
  location: string;
  startDate: string;
  endDate: string;
}) => {
  return (
    <div className="max-h-80 flex gap-8 shadow-2xl shadow-slate-200 py-8 justify-center w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="text-center">
          <Image src={Logo} alt="logo" />
        </div>
        <p
          className="text-center line-clamp-4"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        <div className="flex flex-col pt-4 gap-2">
          <div className="flex gap-4 items-center">
            <span>
              <AiOutlineCalendar className="text-primary" size={20} />
            </span>
            <p className="text-sm">
              {`${new Date(startDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })} -  ${new Date(endDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}`}
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <span>
              <MdLocationCity className="text-primary" size={20} />
            </span>
            <p className="text-sm">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
