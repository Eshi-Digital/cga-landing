import Image from "next/image";
import Vision from "public/static/images/vision.png";
import { MdCheck } from "react-icons/md";
import { getLocaleContent } from "../../utils/localeUtil";
import { useRouter } from "next/router";

const AboutVisionSection = () => {
  const router = useRouter();
  const localized = getLocaleContent(router.locale as string);
  return (
    <div className="flex flex-col md:flex-row gap-8 py-10 md:px-52 items-center my-8 bg-gradient-to-r from-[#E0FFEE] to-[#FFFEF2]  px-4 md:px-0">
      <div className="md:w-1/2 flex justify-end">
        <Image src={Vision} alt="mission" />
      </div>
      <div className="md:w-1/2">
        <div>
          <p className="text-lg font-poppins-bold">{localized.vision}</p>
          <p className="pt-2">
           {localized.vision_content}
          </p>
        </div>
        <div className="pt-8">
          <p className="text-lg font-poppins-bold">{localized.values}</p>
          <ul className="pt-2">
            <li className="flex items-center gap-4 pb-4">
              <span>
                <MdCheck />
              </span>{" "}
              {localized.value_1}
            </li>
            <li className="flex items-center gap-4 pb-4">
              <span>
                <MdCheck />
              </span>{" "}
                           {localized.value_2}

            </li>
            <li className="flex items-center gap-4 pb-4">
              <span>
                <MdCheck />
              </span>{" "}
                            {localized.value_3}

            </li>
            <li className="flex items-center gap-4 pb-4">
              <span>
                <MdCheck />
              </span>{" "}
                           {localized.value_4}

            </li>
            <li className="flex items-center gap-4 pb-4">
              <span>
                <MdCheck />
              </span>{" "}
                           {localized.value_5}

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutVisionSection;
