import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import TeamCard from "./team-card";
import { useRef } from "react";
import { getLocaleContent } from "../../utils/localeUtil";
import { useRouter } from "next/router";
import kifle from "../../../public/static/images/kifle.png";
import membere from "../../../public/static/images/menbere.jpg";
import yonas from "../../../public/static/images/yonas.jpg";
import asrat from "../../../public/static/images/asrat.jpg";





const TeamSection = () => {
  const ref = useRef<HTMLInputElement>(null);

  const scroll = (scrollOffset: number) => {
   
   
    if (!ref.current) return;
    ref.current.scrollLeft += scrollOffset;
  };
 const router = useRouter();
  const localized = getLocaleContent(router.locale as string);
const boardMembers =[
  {
    id:1,
    name:localized.board_member1,
    role:localized.role1,
    detail:localized.detail1,
    image:kifle
  },
   {
    id:2,
    name:localized.board_member2,
    role:localized.role2,
    detail:localized.detail2,
    image:membere
  },
    {
    id:3,
    name:localized.board_member3,
    role:localized.role3,
    detail:localized.detail3,
    image:yonas
  },  {
    id:4,
    name:localized.board_member4,
    role:localized.role4,
    detail:localized.detail4,
    image:asrat
  },

]

  return (
    <div className="text-center py-10 md:py-32">
      <p className="font-poppins-medium text-lg mb-6 md:mb-10">{localized.team}</p>
      <h1 className="text-3xl mb-8">{localized.board_members}</h1>
      <p className="max-w-4xl mx-auto text-gray-500 mb-8 md:mb-16">
       {localized.board_sub}
      </p>
      <div
        className="flex overflow-x-auto p-4 gap-8 w-full md:max-w-7xl mx-auto scrollbar-hide mb-4"
        ref={ref}
      >
        {
          boardMembers.map(member=> < TeamCard key={member.id} name={ member["name"]} role={member["role"]} detail={member["detail"]} image ={member["image"]}/>)
        }
     
       
      </div>
      <div className="flex justify-end max-w-7xl mx-auto">
        <div onClick={() => scroll(-200)} className="cursor-pointer">
          <AiFillLeftCircle size={40} className="text-primary" />
        </div>
        <div onClick={() => scroll(200)} className="cursor-pointer">
          <AiFillRightCircle size={40} className="text-primary" />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
