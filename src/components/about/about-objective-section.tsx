import { MdCheck } from "react-icons/md";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";
import { useRouter } from "next/router";

const AboutObjectiveSection = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center my-8">
        <p className="text-3xl uppercase">{t("objectives")}</p>
        <div className="flex gap-8 pt-8 flex-col md:flex-row">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{t("objective_1")}</p>
          </div>
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{t("objective_2")}</p>
          </div>
        </div>
        <div className="flex gap-8 pt-8 flex-col md:flex-row">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{t("objective_3")}</p>
          </div>
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{t("objective_4")}</p>
          </div>
        </div>
        <div className="flex gap-8 pt-8 flex-col md:flex-row">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{t("objective_5")}</p>
          </div>
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{t("objective_6")}</p>
          </div>
        </div>
        <div className="flex gap-8 pt-8 flex-col md:flex-row">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{t("objective_7")}</p>
          </div>
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{t("objective_8")}</p>
          </div>
        </div>
        <div className="flex gap-8 pt-8 flex-col md:flex-row">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">{t("objective_9")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutObjectiveSection;
