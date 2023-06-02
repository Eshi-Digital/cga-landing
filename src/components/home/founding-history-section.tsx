import Image from "next/image";

import Founders from "../../../public/static/images/founders.png";
import { getLocaleContent } from "../../utils/localeUtil";
import { useRouter } from "next/router";


const FoundingSection = () => {
  const router = useRouter();

    const localized = getLocaleContent(router.locale as string);
  return (
    <div className="py-12 flex flex-col bg-secondary w-full px-4 xl:px-20 gap-4">
      <div className="font-PoiretOne-Regular text-4xl">{localized.founders_history}</div>
      <div>{localized.people_behind}</div>
      <div className="mb-10 font-poppins-light">
        <p>
         {localized.founders_history_sub}
        </p>
        <p>
         {localized.founders_history_sub2}
        </p>
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
             {localized.pic_title}
            </div>
            <div>
              <div className="grid grid-cols-4 gap-8 text-center mt-14">
                <div className="font-poppins-regular text-2">
                 {localized.person_1}
                </div>
                <div className="font-poppins-regular text-2">
                 {localized.person_5}
                </div>
                <div className="font-poppins-regular text-2">
                 {localized.person_9}
                </div>
                <div className="font-poppins-regular text-2">
                 {localized.person_14}
                </div>

                <div className="font-poppins-regular text-2">
                 {localized.person_2}
                </div>
                <div className="font-poppins-regular text-2">
                  {localized.person_6}

                </div>
                <div className="font-poppins-regular text-2">
                                   {localized.person_10}

                </div>
                <div className="font-poppins-regular text-2">
                                   {localized.person_15}

                </div>
                <div className="font-poppins-regular text-2">
                                   {localized.person_3}

                </div>
                <div className="font-poppins-regular text-2">
                                   {localized.person_7}

                </div>
                <div className="font-poppins-regular text-2">
                                  {localized.person_11}

                </div>
                <div className="font-poppins-regular text-2">
                                  {localized.person_16}

                </div>
                <div className="font-poppins-regular text-2">
                                   {localized.person_4}

                </div>
                <div className="font-poppins-regular text-2">
                                    {localized.person_8}

                </div>
                <div className="font-poppins-regular text-2">
                                   {localized.person_13}

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
