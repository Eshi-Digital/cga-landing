import { MdRampRight } from "react-icons/md";

const MembershipFee = () => {
  return (
    <div className="max-w-7xl mx-auto text-center flex flex-col items-start gap-4 py-20">
      <h1 className="pb-4 text-2xl uppercase w-full text-center">
        Membership Fee
      </h1>
      <p className="flex items-start gap-4 justify-center text-left">
        <span>
          <MdRampRight size={20} />
        </span>{" "}
        Full members pay membership registration fee of Birr 300.0
      </p>
      <p className="flex items-start gap-4 justify-center text-left">
        <span>
          <MdRampRight size={20} />
        </span>{" "}
        Tennis membership registration fee of Birr300.00 (optional) monthly
        contribution of Birr20.00 and tennis club monthly contribution of
        Birr45.00 (optional)
      </p>
      <p className="flex items-start gap-4 justify-center text-left">
        <span>
          <MdRampRight size={20} />
        </span>{" "}
        Associate members pay registration fee of Birr600.00 and monthly
        contribution of Birr70.00{" "}
      </p>
    </div>
  );
};

export default MembershipFee;
