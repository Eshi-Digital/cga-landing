const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex gap-8 justify-between items-start bg-primary py-20 px-40 text-white font-poppins-light">
        <div className="w-1/3">
          <div className="text-xl font-poppins-medium mb-8">Address</div>
          <div className="pr-40">
            Address Commerical Graduates Association Africa Avenue (Behind Mega
            Bld.) Kirkos Subcity, Woreda 2, House #B27-20
          </div>
        </div>
        <div className="w-1/3">
          <div className="text-xl font-poppins-medium mb-8">Quick Links</div>
          <div>
            <ul className="flex flex-col gap-2">
              <li>Home</li>
              <li>About</li>
              <li>Membership</li>
              <li>Facilities</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="text-xl font-poppins-medium mb-8">Contact</div>
          <div className="flex flex-col items-start">
            <p>Tel. +251 115 159 051</p>
            <p>Fax. +251 115 152 862</p>
            <p className="mb-4">POBox 8978</p>
            <p>Addis Ababa, Ethiopia</p>
            <p>info@cgaethiopia.org</p>
          </div>
        </div>
      </div>
      <div className="bg-[#282c33] py-10">
        <div className="flex justify-center items-center">
          <div className="text-gray-500 text-sm">
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
