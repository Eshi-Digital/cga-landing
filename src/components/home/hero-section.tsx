import { useRouter } from "next/router";

import Carousel from "../carousel/Carousel";
import Image from "next/image";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

const HeroSection = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  const images = [
    {
      src: "/static/images/hero.png",
    },
    {
      src: "/static/images/1.jpeg",
    },
    {
      src: "/static/images/2.jpeg",
    },
    {
      src: "/static/images/3.jpeg",
    },
    {
      src: "/static/images/4.jpeg",
    },
    {
      src: "/static/images/5.jpeg",
    },
    {
      src: "/static/images6.jpeg",
    },
    {
      src: "/static/images/7.jpeg",
    },
  ];

  return (
    // <div className=" h-[90vh] bg-no-repeat bg-cover flex items-center justify-center py-28">
    <div className="h-[90vh] bg-no-repeat w-full bg-cover">
      <Carousel>
        {images.map((image, index) => (
          <div
            className="relative h-[90vh] flex-[0_0_100%] flex flex-row justify-center items-end"
            key={index}
          >
            <Image
              src={image.src}
              fill
              className="object-cover -z-10"
              alt="alt"
            />
            <div className="flex flex-col gap-5 justify-center items-center">
              {/* <div className="text-center text-white font-PoiretOne-Regular text-4xl">
                {image.hero_title}
              </div>
              <div className="text-center text-white font-poppins-light text-md">
                {image.hero_subtitle}
              </div> */}
              <div className="flex-col md:flex-row flex gap-8 py-6">
                <div
                  className="bg-primary rounded-full px-12 py-3 text-white cursor-pointer hover:bg-gray-400 transition duration-300 ease-in-out"
                  onClick={() => {
                    router.push("/about");
                  }}
                >
                  {t("learn_more")}
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="flex flex-col gap-5 justify-center items-center">
          <div className="text-center text-white text-4xl font-PoiretOne-Regular">
            {t("hero_title}
          </div>
          <div className="text-center text-white font-PoiretOne-Regular text-4xl">
            {t("hero_title2}
          </div>
          <div className="text-center text-white font-poppins-light text-md">
            {t("hero_subtitle}
          </div>
          <div className="flex-col md:flex-row flex gap-8 py-6">
            <div
              className="bg-primary rounded-full px-12 py-3 text-white cursor-pointer"
              onClick={() => {
                router.push("/about");
              }}
            >
              {t("learn_more}
            </div>
          </div>
        </div> */}
      </Carousel>
    </div>
  );
};

export default HeroSection;
