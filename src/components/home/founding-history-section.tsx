import Image from "next/image";

import Founders from "../../../public/static/images/founders.png";

const FoundingSection = () => {
  return (
    <div className="py-12 flex flex-col bg-secondary w-full px-4 xl:px-20 gap-4">
      <div className="font-PoiretOne-Regular text-4xl">Founders History</div>
      <div>People behind this huge company</div>
      <div className="mb-10 font-poppins-light">
        <p>
          Fifteen far-sighted 1941 (E.C) graduates of the commercial School
          founded CGA in 1942 with the aim of maintaining their school
          friendship after their graduation. They strongly wanted to come
          together after working hours so that they can meet and discuss their
          work environment and their profession. Their grand idea who supported
          by their school director, Mr. William Naguib Nashed who advised them
          to make their association to embrace previous as well as subsequent
          graduates.
        </p>
        <p>
          They continued along this line and kept on accepting Commercial School
          graduates as members. Their association was known as Commercial School
          Graduates Association which later on become Commercial Graduates
          Association (CGA).
        </p>
      </div>
      <div className="group">
        <div className="relative flex justify-center">
          <Image
            src={Founders}
            className="xl:group-hover:invisible"
            alt="founding members"
          />
          <div className="hidden xl:flex flex-col absolute top-4 invisible xl:group-hover:visible bg-white w-full py-16 justify-start max-w-7xl mx-auto rounded-3xl">
            <div className="font-poppins-regular text-3xl text-blue-400 mb-10 text-center">
              This picture shows 12 founders out of 15
            </div>
            <div>
              <div className="grid grid-cols-4 gap-8 text-center mt-14">
                <div className="font-poppins-regular text-2">
                  Ato Abebe Tadese(deceased)
                </div>
                <div className="font-poppins-regular text-2">
                  Ato Alemu Mulatu (deceased)
                </div>
                <div className="font-poppins-regular text-2">
                  Ato Tibebe Gebreamlak (deceased)
                </div>
                <div className="font-poppins-regular text-2">
                  Fitawrari Kebede Desta (deceased)
                </div>

                <div className="font-poppins-regular text-2">
                  Ato Belaineh Beshah (deceased)
                </div>
                <div className="font-poppins-regular text-2">
                  Ato Tilahun Kassaye (deceased)
                </div>
                <div className="font-poppins-regular text-2">
                  Ato Tilahun Mitiku (deceased)
                </div>
                <div className="font-poppins-regular text-2">
                  Ato Birhanu Endale
                </div>
                <div className="font-poppins-regular text-2">
                  Ato Birhanu Kidane (deceased)
                </div>
                <div className="font-poppins-regular text-2">
                  Ato Yusuf Abubeker (deceased)
                </div>
                <div className="font-poppins-regular text-2">
                  Ato Yimtatu Tadese
                </div>
                <div className="font-poppins-regular text-2">
                  Ato Gorfineh Gebeyehu
                </div>
                <div className="font-poppins-regular text-2">
                  Fitawrari Getachew Kifle
                </div>
                <div className="font-poppins-regular text-2">
                  Ato Yohannes Belete
                </div>
                <div className="font-poppins-regular text-2">
                  Ato Aytadeg Gebreyesus (deceased)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundingSection;
