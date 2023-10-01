import Image from "next/image";

import Founders from "../../../public/static/images/founders.png";
import { useRouter } from "next/router";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

const FoundingSection = () => {
  const router = useRouter();

  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <div className="py-12 flex flex-col bg-[#FAFAFA] w-full px-4 xl:px-20 gap-4">
      <div className="font-PoiretOne-Regular text-4xl">
        {t("founders_history")}
      </div>
      <div>{t("people_behind")}</div>
      <div className="mb-10 text-justify text-gray-600">
        <p>{t("founders_history_sub")}</p>
        <p>{t("founders_history_sub2")}</p>
      </div>
      <div className="group">
        <div className="relative flex justify-center">
          <Image
            src={Founders}
            className="xl:group-hover:invisible cursor-pointer"
            alt="founding members"
          />
          <div className="hidden xl:flex flex-col absolute top-4 bg-white shadow-md w-full py-16 justify-start max-w-7xl mx-auto rounded-3xl invisible xl:group-hover:visible">
            <div className="text-2xl text-center">{t("pic_title")}</div>
            <div className="text-gray-600 text-sm">
              <div className="grid grid-cols-4 gap-4 text-center mt-12">
                <span>{t("person_1")}</span>
                <span>{t("person_5")}</span>
                <span>{t("person_9")}</span>
                <span>{t("person_14")}</span>
                <span>{t("person_2")}</span>
                <span>{t("person_6")}</span>
                <span>{t("person_10")}</span>
                <span>{t("person_15")}</span>
                <span>{t("person_3")}</span>
                <span>{t("person_7")}</span>
                <span>{t("person_11")}</span>
                <span>{t("person_16")}</span>
                <span>{t("person_4")}</span>
                <span>{t("person_8")}</span>
                <span>{t("person_13")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundingSection;
