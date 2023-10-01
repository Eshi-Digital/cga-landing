import { AiFillDollarCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/router";
import { getLocaleContent } from "../../utils/localeUtil";
import { FaUsers } from "react-icons/fa";
import { LuMonitorSmartphone } from "react-icons/lu";

const JobCategorySection = () => {
  const router = useRouter();
  const localized = getLocaleContent(router.locale as string);
  return (
    <div className="py-10 max-w-7xl mx-auto text-center">
      <h1 className="mb-10 text-4xl uppercase">{localized.vacancy_sub}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 lg:px-0 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-3 bg-purple-100 p-8 rounded-lg">
          <div>
            <AiOutlineShoppingCart size={40} className="text-[#B277F8]" />
          </div>
          <span className="text-[#B277F8]">{localized.marketing}</span>
        </div>
        <div className="flex flex-col items-start gap-3 bg-yellow-100 p-8 rounded-lg">
          <div>
            <AiFillDollarCircle size={40} className="text-[#FFD900]" />
          </div>
          <span className="text-gray-500">{localized.finance}</span>
        </div>
        <div className="flex flex-col items-start gap-3 bg-green-100 p-8 rounded-lg">
          <div>
            <FaUsers size={40} className="text-[#07FC32]" />
          </div>
          <span className="text-gray-500">{localized.human_resource}</span>
        </div>
        <div className="flex flex-col items-start gap-3 bg-blue-100 p-8 rounded-lg">
          <div>
            <LuMonitorSmartphone size={40} className="text-[#043DF5]" />
          </div>
          <span className="text-[#043DF5]">{localized.graphics_designer}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCategorySection;
