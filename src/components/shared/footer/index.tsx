import { getLocaleContent } from "../../../utils/localeUtil";
import { useRouter } from "next/router";
const Footer = () => {

    const router = useRouter();
  const localized = getLocaleContent(router.locale as string);
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col md:flex-row gap-8 justify-between items-start bg-primary py-20 pl-4 md:px-40 text-white font-poppins-light">
        <div className="md:w-1/3">
          <div className="text-xl font-poppins-medium mb-8">{localized.address}</div>
          <div className="md:pr-40">
           {localized.address_sub}
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="text-xl font-poppins-medium mb-8">{localized.quick_link}</div>
          <div>
            <ul className="flex flex-col gap-2">
              <li>{localized.home_link}</li>
              <li>{localized.about_link}</li>
              <li>{localized.membership_link}</li>
              <li>{localized.facilities_title}</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="text-xl font-poppins-medium mb-8">{localized.contact_link}</div>
          <div className="flex flex-col items-start">
            <p>Tel. +251 115 159 051</p>
            <p>Fax. +251 115 152 862</p>
            <p className="mb-4">POBox 8978</p>
            <p>Addis Ababa, Ethiopia</p>
            <p>info@cgaethiopia.org</p>
          </div>
        </div>
      </div>
      <div className="bg-[#282c33] py-10 px-4">
        <div className="flex justify-center items-center">
          <div className="text-gray-500 text-sm text-center">
            Copyright © 2023 Commercial Graduates Association, Developed by
            <span className="text-white">Eshi digital</span>. All rights
            reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
