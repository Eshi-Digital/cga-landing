import { MdCheck } from "react-icons/md";
import { useRouter } from "next/router";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

const AboutGovernanceSection = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <div className="md:max-w-7xl md:mx-auto flex flex-col md:gap-8">
      <div className="flex flex-col items-center my-8">
        <p className="text-3xl uppercase">{t("governance")}</p>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="text-justify">{t("governance_content")}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:my-8">
        <p className="text-3xl uppercase">{t("strategic_plan")}</p>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="text-justify">{t("strategy_content")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGovernanceSection;
