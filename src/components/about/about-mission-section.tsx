import Image from "next/image";
import Mission from "public/static/images/mission.png";
import { useRouter } from "next/router";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

const AboutMissionSection = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 md:max-w-7xl md:mx-auto items-center my-8  px-4 md:px-0">
      <div className="md:w-1/2">
        <div>
          <p className="text-lg font-poppins-bold">{t("statute")}</p>
          <p className="pt-2">{t("statute_content")}</p>
        </div>
        <div className="pt-8">
          <p className="text-lg font-poppins-bold">{t("mission")}</p>
          <p className="pt-2">{t("mission_content")}</p>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-end">
        <Image src={Mission} alt="mission" />
      </div>
    </div>
  );
};

export default AboutMissionSection;
