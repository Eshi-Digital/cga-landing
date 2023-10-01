import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import TeamCard from "./team-card";
import { useRef } from "react";
import { useRouter } from "next/router";
import kifle from "../../../public/static/images/kifle.png";
import membere from "../../../public/static/images/menbere.jpg";
import yonas from "../../../public/static/images/yonas.jpg";
import asrat from "../../../public/static/images/asrat.jpg";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

const TeamSection = () => {
  const ref = useRef<HTMLInputElement>(null);

  const scroll = (scrollOffset: number) => {
    if (!ref.current) return;
    ref.current.scrollLeft += scrollOffset;
  };
  const router = useRouter();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const boardMembers = [
    {
      id: 1,
      name: t("board_member1"),
      role: t("role1"),
      detail: t("detail1"),
      image: kifle,
    },
    {
      id: 2,
      name: t("board_member2"),
      role: t("role2"),
      detail: t("detail2"),
      image: membere,
    },
    {
      id: 3,
      name: t("board_member3"),
      role: t("role3"),
      detail: t("detail3"),
      image: yonas,
    },
    {
      id: 4,
      name: t("board_member4"),
      role: t("role4"),
      detail: t("detail4"),
      image: asrat,
    },
  ];

  return (
    <div className="text-center py-10 md:py-16">
      <p className="text-4xl mb-4">{t("team")}</p>
      <h1 className="text-gray-600 text-2xl mb-4">{t("board_members")}</h1>
      <div className="flex justify-end max-w-7xl mx-auto">
        <div onClick={() => scroll(-630)} className="cursor-pointer">
          <AiFillLeftCircle size={40} className="text-primary" />
        </div>
        <div onClick={() => scroll(630)} className="cursor-pointer">
          <AiFillRightCircle size={40} className="text-primary" />
        </div>
      </div>
      <div
        className="flex overflow-x-auto p-4 gap-8 w-full md:max-w-7xl mx-auto scrollbar-hide mb-4"
        ref={ref}
      >
        {boardMembers.map((member) => (
          <TeamCard
            key={member.id}
            name={member["name"]}
            role={member["role"]}
            detail={member["detail"]}
            image={member["image"]}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
