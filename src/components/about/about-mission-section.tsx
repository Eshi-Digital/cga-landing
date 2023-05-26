import Image from "next/image";
import Mission from "public/static/images/mission.png";

const AboutMissionSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 md:max-w-7xl md:mx-auto items-center my-8  px-4 md:px-0">
      <div className="md:w-1/2">
        <div>
          <p className="text-lg font-poppins-bold">Statute</p>
          <p className="pt-2">
            CGA is being governed by its bylaws that are enacted in line with
            the regulation of the Federal Agency for Charities and Societies.
            The Amharic version of the document is attached here for detailed
            reference.
          </p>
        </div>
        <div className="pt-8">
          <p className="text-lg font-poppins-bold">Mission</p>
          <p className="pt-2">
            To see that our members uphold ethical business conduct in their
            services to the business community and contribute to the development
            of the country by ensuring that commercial education is put to the
            best use
          </p>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-end">
        <Image src={Mission} alt="mission" />
      </div>
    </div>
  );
};

export default AboutMissionSection;
