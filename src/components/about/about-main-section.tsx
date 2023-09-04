import { useRouter } from "next/router";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

const AboutMainSection = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 md:px-0">
      {t("about_content")}
    </div>
  );
};

export default AboutMainSection;
