const ContactUsSection = () => {
  return (
    <div className="text-center py-32">
      <p className="font-poppins-medium text-lg mb-10">Contact Us</p>
      <h1 className="text-3xl mb-8">Get In Touch!</h1>
      <p className="max-w-4xl mx-auto text-gray-500 mb-32">
        Launch your campaign and benefit from our expertise on designing and
        managing conversion centered bootstrap4 html page.
      </p>
      <div className="flex gap-4">
        <div className="w-2/3">hey</div>
        <div className="w-1/3">
          <div className="flex flex-col items-start mb-12">
            <h1 className="font-poppins-medium text-md">Phone</h1>
            <p className="font-poppins-regular text-sm text-gray-500">
              +251-966303009
            </p>
          </div>
          <div className="flex flex-col items-start mb-12">
            <h1 className="font-poppins-medium text-md">Email</h1>
            <p className="font-poppins-regular text-sm text-gray-500">
              info@wegenawi.com
            </p>
          </div>
          <div className="flex flex-col items-start ">
            <h1 className="font-poppins-medium text-md">Location</h1>
            <p className="font-poppins-regular text-sm text-gray-500">
              Addis Ababa, Ethiopia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
