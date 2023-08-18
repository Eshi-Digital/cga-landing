import Image from "next/image";
import Logo from "../../../public/static/images/logo_only.png";
import { MdAttachMoney, MdLocationPin } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsCheck2 } from "react-icons/bs";

const VacancyCard = ({
  id,
  type,
  description,
  requirements,
  salary,
  availableSlots,
  applicationDeadline,
}: {
  id: string;
  type: string;
  description: string;
  requirements: string[];
  salary: string;
  availableSlots: string;
  applicationDeadline: string;
}) => {
  return (
    <div className="flex flex-col gap-4 items-start shadow-md px-4 py-8 rounded-2xl">
      <div>
        <Image src={Logo} alt="logo" />
      </div>
      <div>CGA</div>
      <div className="font-poppins-semibold">{type}</div>
      <div
        className="text-sm text-gray-500 text-left"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      <div>
        <div>
          {requirements.map((requirement: any) => (
            <div key={requirement} className="flex items-center gap-4">
              <BsCheck2 className="text-primary" size={20} />
              {requirement}
            </div>
          ))}
        </div>
        <div></div>
      </div>
      <div className="flex justify-between gap-12">
        <div className="flex items-center gap-4">
          <div>
            <FaMoneyBillWave className="text-primary" size={20} />
          </div>
          <div className="text-sm text-left">{`${salary} ETB`}</div>
        </div>
        <div className="flex items-center gap-4">
          <div>Available Positions:</div>
          <div className="text-sm text-left">{availableSlots}</div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <div>Application Deadline:</div>
          <div className="text-left">
            {new Date(applicationDeadline).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
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
