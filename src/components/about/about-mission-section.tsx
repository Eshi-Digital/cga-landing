import Image from "next/image";
import Mission from "public/static/images/mission.png";
import { getLocaleContent } from "../../utils/localeUtil";
import { useRouter } from "next/router";

const AboutMissionSection = () => {
     const router = useRouter();
  const localized = getLocaleContent(router.locale as string);
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 md:max-w-7xl md:mx-auto items-center my-8  px-4 md:px-0">
      <div className="md:w-1/2">
        <div>
          <p className="text-lg font-poppins-bold">{localized.statute}</p>
          <p className="pt-2">
          {localized.statute_content}
          </p>
        </div>
        <div className="pt-8">
          <p className="text-lg font-poppins-bold">{localized.mission}</p>
          <p className="pt-2">
          {localized.mission_content}
          </p>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-end">
        <Image src={Mission} alt="mission" />
      </div>
    </div>
  );
};

export default AboutMissionSection;
