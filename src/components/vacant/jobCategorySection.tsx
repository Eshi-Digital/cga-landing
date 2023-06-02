import { AiFillDollarCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import { getLocaleContent } from "../../utils/localeUtil";

const JobCategorySection = () => {
    const router = useRouter();
    const localized = getLocaleContent(router.locale as string);
  return (
    <div className="py-10 max-w-7xl mx-auto text-center">
      <h1 className="mb-10 text-4xl uppercase">{localized.vacancy_sub}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 lg:px-0 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-3 bg-purple-100 p-8 rounded-lg">
          <div>
            <AiFillDollarCircle size={40} className="text-primary" />
          </div>
          <div>{localized.marketing}</div>
        </div>
        <div className="flex flex-col items-start gap-3 bg-yellow-100 p-8 rounded-lg">
          <div>
            <AiFillDollarCircle size={40} className="text-primary" />
          </div>
          <div>{localized.finance}</div>
        </div>
        <div className="flex flex-col items-start gap-3 bg-green-100 p-8 rounded-lg">
          <div>
            <AiFillDollarCircle size={40} className="text-primary" />
          </div>
          <div>{localized.human_resource}</div>
        </div>
        <div className="flex flex-col items-start gap-3 bg-blue-100 p-8 rounded-lg">
          <div>
            <AiFillDollarCircle size={40} className="text-primary" />
          </div>
          <div>{localized.graphics_designer}</div>
        </div>
      </div>
    </div>
  );
};

export default JobCategorySection;
