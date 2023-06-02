import { MdCheck } from "react-icons/md";
import { getLocaleContent } from "../../utils/localeUtil";
import { useRouter } from "next/router";

const AboutGovernanceSection = () => {
    const router = useRouter();
  const localized = getLocaleContent(router.locale as string);
  return (
    <div className="md:max-w-7xl md:mx-auto flex flex-col md:gap-8">
      <div className="flex flex-col items-center my-8">
        <p className="text-3xl uppercase">{localized.governance}</p>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">
             {localized.governance_content}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:my-8">
        <p className="text-3xl uppercase">{localized.strategic_plan}</p>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">
             {localized.strategy_content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGovernanceSection;
