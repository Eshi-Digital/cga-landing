const ContactUsSection = () => {
  return (
    <div className="text-center py-32">
      <p className="font-poppins-medium text-lg mb-10">Contact Us</p>
      <h1 className="text-3xl mb-8">Get In Touch!</h1>
      <p className="max-w-4xl mx-auto text-gray-500 mb-8 md:mb-32">
        Launch your campaign and benefit from our expertise on designing and
        managing conversion centered bootstrap4 html page.
      </p>
      <div className="flex gap-4 flex-col-reverse md:flex-row px-2">
        <div className="w-full flex justify-center md:w-2/3">
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold md:mb-12 mb-3 md:hidden flex my-4">
              Drop us a line
            </h1>
            <form className="flex flex-col gap-y-2">
              <input
                type="text"
                placeholder="Name"
                className="border-1 border-gray-300 p-2 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-1 border-gray-300 p-2 rounded-md"
              />
              <textarea
                placeholder="Message"
                className="border-1 border-gray-300 p-2 rounded-md"
              />
              <button
                type="submit"
                className="bg-primary text-white p-2 rounded-md"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-col md:justify-between sm:flex-row w-full md:w-1/3">
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
