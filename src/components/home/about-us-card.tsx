import { MdArrowForwardIos } from "react-icons/md";

const AboutUsCard = () => {
  return (
    <div className="py-12 w-80 flex flex-col items-center gap-5 shadow-md px-4 rounded-lg">
      <div>
        <div className="rounded-full w-20 h-20 bg-red-200"></div>
      </div>
      <div>CGA Profile</div>
      <div className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
        vero quae, suscipit ut corporis dolore.
      </div>
      <div className="flex flex-row gap-4 justify-end w-full items-center">
        <div>View more</div>
        <div className="rounded-full w-10 h-10 bg-blue-200 flex justify-center items-center">
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
