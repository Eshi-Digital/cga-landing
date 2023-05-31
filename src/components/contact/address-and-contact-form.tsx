export default function AddressAndContactForm() {
  return (
    <div className="px-4 py-20 mx-auto max-w-4xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-x-10">
        <div className="w-full flex flex-col gap-y-2">
          <h1 className="text-3xl font-bold md:mb-12 mb-3">Address</h1>
        </div>
        <div className="w-full md:flex flex-col gap-y-2 hidden">
          <h1 className="text-3xl font-bold md:mb-12 mb-3">Drop us a line</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-x-10">
        <div className="w-full flex flex-col gap-y-2">
          <p>Commercial Graduates Association</p>
          <p>Africa Avenue</p>
          <p>Behind Megenagna Bld.</p>
          <p>Kirkos sub-city, Woreda 2, House number #B27-20</p>
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-bold md:mb-12 mb-3 md:hidden flex my-4">
            Drop us a line
          </h1>
          <form className="flex flex-col gap-y-2">
            <input
              type="text"
              placeholder="Name"
              className="border-2 border-gray-300 p-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-gray-300 p-2 rounded-md"
            />
            <textarea
              placeholder="Message"
              className="border-2 border-gray-300 p-2 rounded-md"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
