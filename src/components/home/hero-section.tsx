import { useRouter } from "next/router";
import { getLocaleContent } from "../../utils/localeUtil";
const HeroSection = () => {
  const router = useRouter();
  const localized = getLocaleContent(router.locale as string);

  return (
    <div className="bg-hero h-[90vh] bg-no-repeat bg-cover flex items-center justify-center py-28">
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="text-center text-white text-4xl font-PoiretOne-Regular">
        {localized.hero_title}
        </div>
        <div className="text-center text-white font-PoiretOne-Regular text-4xl">
         {localized.hero_title2}
        </div>
        <div className="text-center text-white font-poppins-light text-md">
         {localized.hero_subtitle}
        </div>
        <div className="flex-col md:flex-row flex gap-8 py-6">
          <div
            className="bg-primary rounded-full px-12 py-3 text-white cursor-pointer"
            onClick={() => {
              router.push("/about");
            }}
          >
            {localized.learn_more}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
