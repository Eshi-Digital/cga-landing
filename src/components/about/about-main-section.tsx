import { getLocaleContent } from "../../utils/localeUtil";
import { useRouter } from "next/router";

const AboutMainSection = () => {
    const router = useRouter();
  const localized = getLocaleContent(router.locale as string);
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 md:px-0">
     {localized.about_content}
    </div>
  );
};

export default AboutMainSection;
