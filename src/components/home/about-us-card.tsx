import Image from "next/image";
import { useRouter } from "next/router";
import { MdArrowForwardIos } from "react-icons/md";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

const AboutUsCard = ({
  title,
  description,
  icon,
  color,
  bgColor,
  hoverColor,
}: {
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  hoverColor: string;
}) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <div className="max-h-96 py-4 w-full xl:w-80 shadow-md px-4 rounded-lg">
      <div className="h-80 flex flex-col justify-center items-center gap-5">
        <div>
          <div
            className={`rounded-full w-20 h-20 ${color} flex justify-center items-center`}
          >
            <Image src={icon} alt="icon" width={30} height={30} />
          </div>
        </div>
        <span className="text-lg">{title}</span>
        <div className="text-center text-gray-500 text-sm">{description}</div>
      </div>
      <div
        className="h-10 flex justify-end w-full items-center cursor-pointer"
        onClick={() => {
          router.push("/about");
        }}
      >
        <div className="flex gap-4 justify-center items-center">
          <span className="text-sm">{t("view_more")}</span>
          <div
            className={`rounded-full w-8 h-8 flex ${bgColor} justify-center items-center ${hoverColor} hover:text-white transition duration-300 ease-in-out`}
          >
            <MdArrowForwardIos size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
