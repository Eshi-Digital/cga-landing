import Image from "next/image";

const AnoutMembershipSection = () => {
  return (
    <div className="px-2 flex flex-col md:flex-row items-start py-4 md:py-20 max-w-7xl mx-auto gap-20">
      <div className="w-full md:w-1/2">
        <Image
          src="/static/images/father.png"
          alt="membership"
          width={500}
          height={500}
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div className="font-PoiretOne-Regular text-4xl">About Membership</div>
        <div>By laws</div>
        <div className="text-sm mb-8">
          Commercial Graduates Association (CGA) is one of the pioneering
          professional associations in Ethiopia which was founded in 1950 (1942
          EC). It continued in existence for more than 66 years thanks to the
          founders and senior members, the dedicated directors of the Commercial
          School, Dr. William Naguib Nashed and Ato Seifu Felleke and those who
          time and again assumed the leadership role and extended their untiring
          services towards the growth of the Association. Please visit our pages
          and learn more about our Association.
        </div>
        <div className="flex gap-8 items-center">
          <div className="hidden sm:flex rounded-full w-20 h-20 bg-red-100"></div>
          <div className="flex flex-col gap-2">
            <div className="text-md">By laws association of CGA</div>
            <div className="text-blue-400">Download here</div>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div className="hidden sm:flex rounded-full w-20 h-20 bg-red-100"></div>
          <div className="flex flex-col gap-2">
            <div className="text-md">By laws association of CGA</div>
            <div className="text-blue-400">Download here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnoutMembershipSection;
