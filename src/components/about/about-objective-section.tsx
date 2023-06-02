import { MdCheck } from "react-icons/md";
import { getLocaleContent } from "../../utils/localeUtil";
import { useRouter } from "next/router";

const AboutObjectiveSection = () => {
  const router = useRouter();
  const localized = getLocaleContent(router.locale as string);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center my-8">
        <p className="text-3xl uppercase">{localized.objectives}</p>
        <div className="flex gap-8 pt-8 flex-col md:flex-row">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{localized.objective_1}</p>
          </div>
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{localized.objective_2}</p>
          </div>
        </div>
        <div className="flex gap-8 pt-8 flex-col md:flex-row">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{localized.objective_3}</p>
          </div>
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{localized.objective_4}</p>
          </div>
        </div>
        <div className="flex gap-8 pt-8 flex-col md:flex-row">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{localized.objective_5}</p>
          </div>
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{localized.objective_6}</p>
          </div>
        </div>
        <div className="flex gap-8 pt-8 flex-col md:flex-row">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{localized.objective_7}</p>
          </div>
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{localized.objective_8}</p>
          </div>
        </div>
        <div className="flex gap-8 pt-8 flex-col md:flex-row">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{localized.objective_9}</p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default AboutObjectiveSection;
