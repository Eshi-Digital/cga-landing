import Image from "next/image";
import Logo from "../../../public/static/images/logo_only.png";
import { MdLocationPin } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";

const VacancyCard = () => {
  return (
    <div className="flex flex-col gap-4 items-start shadow-md px-4 py-8 rounded-2xl">
      <div>
        <Image src={Logo} alt="logo" />
      </div>
      <div>CGA</div>
      <div className="font-poppins-semibold">Female Human resouce manager</div>
      <div className="text-sm text-gray-500 text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit et
        corporis animi hic explicabo deleniti iure molestiae totam facilis unde
        accusantium, incidunt architecto.
      </div>
      <div className="flex justify-between gap-12">
        <div className="flex items-center gap-4">
          <div>
            <AiFillClockCircle className="text-primary" size={20} />
          </div>
          <div className="text-sm text-left">Full Time</div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <MdLocationPin className="text-primary" size={20} />
          </div>
          <div className="text-sm text-left">bole, Addis Ababa, Ethiopia</div>
        </div>
      </div>
      <hr />
      <div className="flex w-full justify-center">
        <button className="bg-primary text-white rounded-full py-2 w-44 text-center">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default VacancyCard;
