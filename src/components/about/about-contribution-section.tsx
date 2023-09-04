import { useRouter } from "next/router";
import { MdCheck } from "react-icons/md";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

const AboutContributionSection = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center my-8">
        <p className="text-3xl uppercase">{t("cgas_contributions")}</p>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{t("contribution_1")}</p>
          </div>
        </div>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{t("contribution_2")}</p>
          </div>
        </div>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{t("contribution_3")}</p>
          </div>
        </div>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{t("contribution_4")}</p>
          </div>
        </div>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{t("contribution_5")}</p>
          </div>
        </div>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{t("contribution_6")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContributionSection;
