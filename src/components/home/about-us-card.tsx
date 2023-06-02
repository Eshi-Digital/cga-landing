import Image from "next/image";
import { useRouter } from "next/router";
import { MdArrowForwardIos } from "react-icons/md";
import { getLocaleContent } from "../../utils/localeUtil";


const AboutUsCard = ({
  title,
  description,
  icon,
  color,
}: {
  title: string;
  description: string;
  icon: string;
  color: string;
}) => {
  const router = useRouter();
    const localized = getLocaleContent(router.locale as string);

  return (
    <div className="py-12 w-full xl:w-80 flex flex-col items-center gap-5 shadow-md px-4 rounded-lg">
      <div>
        <div
          className={`rounded-full w-20 h-20 ${color} flex justify-center items-center`}
        >
          <Image src={icon} alt="icon" width={30} height={30} />
        </div>
      </div>
      <div>{title}</div>
      <div className="text-center">{description}</div>
      <div
        className="flex flex-row gap-4 justify-end w-full items-center cursor-pointer"
        onClick={() => {
          router.push("/about");
        }}
      >
        <div>{localized.view_more}</div>
        <div className="rounded-full w-10 h-10 bg-blue-200 flex justify-center items-center">
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
