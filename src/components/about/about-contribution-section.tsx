
import { getLocaleContent } from "../../utils/localeUtil";
import { useRouter } from "next/router";
import { MdCheck } from "react-icons/md";

const AboutContributionSection = () => {
     const router = useRouter();
  const localized = getLocaleContent(router.locale as string);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center my-8">
        <p className="text-3xl uppercase">{localized.cgas_contributions}</p>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">
             {localized.contribution_1}
            </p>
          </div>
        </div>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">
                          {localized.contribution_2}

            </p>
          </div>
        </div>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">
                          {localized.contribution_3}

            </p>
          </div>
        </div>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">
                          {localized.contribution_4}

            </p>
          </div>
        </div>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">
                          {localized.contribution_5}

            </p>
          </div>
        </div>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">
                          {localized.contribution_6}

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContributionSection;
