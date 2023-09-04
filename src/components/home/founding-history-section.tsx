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
    <div className="py-12 flex flex-col bg-secondary w-full px-4 xl:px-20 gap-4">
      <div className="font-PoiretOne-Regular text-4xl">
        {t("founders_history")}
      </div>
      <div>{t("people_behind")}</div>
      <div className="mb-10 font-poppins-light">
        <p>{t("founders_history_sub")}</p>
        <p>{t("founders_history_sub2")}</p>
      </div>
      <div className="group">
        <div className="relative flex justify-center">
          <Image
            src={Founders}
            className="xl:group-hover:invisible"
            alt="founding members"
          />
          <div className="hidden xl:flex flex-col absolute top-4 invisible xl:group-hover:visible bg-white w-full py-16 justify-start max-w-7xl mx-auto rounded-3xl">
            <div className="font-poppins-regular text-3xl text-blue-400 mb-10 text-center">
              {t("pic_title")}
            </div>
            <div>
              <div className="grid grid-cols-4 gap-8 text-center mt-14">
                <div className="font-poppins-regular text-2">
                  {t("person_1")}
                </div>
                <div className="font-poppins-regular text-2">
                  {t("person_5")}
                </div>
                <div className="font-poppins-regular text-2">
                  {t("person_9")}
                </div>
                <div className="font-poppins-regular text-2">
                  {t("person_14")}
                </div>

                <div className="font-poppins-regular text-2">
                  {t("person_2")}
                </div>
                <div className="font-poppins-regular text-2">
                  {t("person_6")}
                </div>
                <div className="font-poppins-regular text-2">
                  {t("person_10")}
                </div>
                <div className="font-poppins-regular text-2">
                  {t("person_15")}
                </div>
                <div className="font-poppins-regular text-2">
                  {t("person_3")}
                </div>
                <div className="font-poppins-regular text-2">
                  {t("person_7")}
                </div>
                <div className="font-poppins-regular text-2">
                  {t("person_11")}
                </div>
                <div className="font-poppins-regular text-2">
                  {t("person_16")}
                </div>
                <div className="font-poppins-regular text-2">
                  {t("person_4")}
                </div>
                <div className="font-poppins-regular text-2">
                  {t("person_8")}
                </div>
                <div className="font-poppins-regular text-2">
                  {t("person_13")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundingSection;
