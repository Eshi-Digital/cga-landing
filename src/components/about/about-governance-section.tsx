import { MdCheck } from "react-icons/md";

const AboutGovernanceSection = () => {
  return (
    <div className="md:max-w-7xl md:mx-auto flex flex-col md:gap-8">
      <div className="flex flex-col items-center my-8">
        <p className="text-3xl uppercase">Governance</p>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">
              CGA is being governed by its bylaws that are enacted in line with
              the regulation of the Federal Agency for Charities and Societies.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:my-8">
        <p className="text-3xl uppercase">Strategic Plan</p>
        <div className="flex gap-8 pt-8">
          <div className="flex  gap-4">
            <span>
              <MdCheck />
            </span>
            <p className="">
              CGA is being governed by its bylaws that are enacted in line with
              the regulation of the Federal Agency for Charities and Societies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGovernanceSection;
