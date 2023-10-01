import { useRouter } from "next/router";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

const MembershipTypeAndCriteriaSection = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto text-justify">
        <h1 className="mb-10 text-2xl uppercase text-center">
          {t("membership_criteria")}
        </h1>
        <p className="text-md font-poppins-light text-gray-500 max-w-4xl mx-auto mb-8">
          {t("membership_1")}
        </p>
        <p className="text-md font-poppins-light text-gray-500 max-w-4xl mx-auto mb-8">
          {t("membership_2")}
        </p>
        <p className="text-md font-poppins-light text-gray-500 max-w-4xl mx-auto mb-8">
          {t("membership_3")}
        </p>
      </div>
    </div>
  );
};

export default MembershipTypeAndCriteriaSection;
