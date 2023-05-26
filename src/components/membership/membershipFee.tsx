import { MdRampRight } from "react-icons/md";

const MembershipFee = () => {
  return (
    <div className="max-w-7xl mx-auto text-center flex flex-col gap-4 py-20">
      <h1 className="pb-4 text-2xl uppercase">Membership Fee</h1>
      <p className="flex items-center gap-4 justify-center">
        <span>
          <MdRampRight size={20} />
        </span>{" "}
        Membership fee is $50 per year.
      </p>
      <p className="flex items-center gap-4 justify-center">
        <span>
          <MdRampRight size={20} />
        </span>{" "}
        Membership fee is $50 per year.
      </p>
      <p className="flex items-center gap-4 justify-center">
        <span>
          <MdRampRight size={20} />
        </span>{" "}
        Membership fee is $50 per year.
      </p>
    </div>
  );
};

export default MembershipFee;
