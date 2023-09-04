import AboutUsCard from "./about-us-card";
import { useRouter } from "next/router";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

interface HomeAboutUsProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const AboutUsSection = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  const aboutUs: HomeAboutUsProps[] = [
    {
      title: t("cga_profile"),
      description: t("profile_sub"),
      icon: "/static/icons/svgs/cga_profile.svg",
      color: "bg-red-200",
    },
    {
      title: t("membership_title"),
      description: t("membership_sub"),
      icon: "/static/icons/svgs/cga_membership.svg",
      color: "bg-green-200",
    },
    {
      title: "Facilities",
      description: t("facilities_subt"),
      icon: "/static/icons/svgs/cga_facilities.svg",
      color: "bg-blue-200",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-4 md:py-28">
      <div className="mb-8">
        <h1 className="text-4xl font-extralight text-center">
          {t("about_title")}
        </h1>
      </div>
      <div className="max-w-5xl">
        <p className="text-center">{t("about_subtitle")}</p>
      </div>
      <div className="flex flex-col px-2 md:flex-row xl:mx-20 xl:gap-14 gap-4 my-8">
        {aboutUs.map((aboutUs) => (
          <AboutUsCard
            key={aboutUs.title}
            title={aboutUs.title}
            description={aboutUs.description}
            icon={aboutUs.icon}
            color={aboutUs.color}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUsSection;
