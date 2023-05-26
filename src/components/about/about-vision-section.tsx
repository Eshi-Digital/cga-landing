import Image from "next/image";
import Vision from "public/static/images/vision.png";
import { MdCheck } from "react-icons/md";

const AboutVisionSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 py-10 md:px-52 items-center my-8 bg-gradient-to-r from-cyan-500 to-blue-500  px-4 md:px-0">
      <div className="md:w-1/2 flex justify-end">
        <Image src={Vision} alt="mission" />
      </div>
      <div className="md:w-1/2">
        <div>
          <p className="text-lg font-poppins-bold">Vision</p>
          <p className="pt-2">
            To see that commercial education is upheld at the best standard so
            that the profession can contribute to the national economic
            development of the country and to the social and material growth of
            the society
          </p>
        </div>
        <div className="pt-8">
          <p className="text-lg font-poppins-bold">Values</p>
          <ul className="pt-2">
            <li className="flex items-center gap-4 pb-4">
              <span>
                <MdCheck />
              </span>{" "}
              Professionalism
            </li>
            <li className="flex items-center gap-4 pb-4">
              <span>
                <MdCheck />
              </span>{" "}
              Impartiality
            </li>
            <li className="flex items-center gap-4 pb-4">
              <span>
                <MdCheck />
              </span>{" "}
              Social responsiveness
            </li>
            <li className="flex items-center gap-4 pb-4">
              <span>
                <MdCheck />
              </span>{" "}
              Friendliness
            </li>
            <li className="flex items-center gap-4 pb-4">
              <span>
                <MdCheck />
              </span>{" "}
              Transparency
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutVisionSection;
