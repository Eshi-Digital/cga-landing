import { useState } from "react";

const MembershipForm = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [gender, setGender] = useState("Male");

  function handleChange(e: any) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  return (
    <div className="max-w-7xl mx-auto px-5 pb-10">
      <h1 className="pb-4 text-2xl uppercase w-full text-center">
        Be our member
      </h1>
      <form>
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="flex flex-col md:w-1/2">
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              className="border-1 border-gray-300 p-2 rounded-md"
              type="text"
              placeholder="Enter first name"
              onChange={handleChange}
              value={state.firstName}
              required
            />
          </div>
          <div className="flex flex-col md:w-1/2">
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              className="border-1 border-gray-300 p-2 rounded-md"
              type="text"
              placeholder="Enter last name"
              onChange={handleChange}
              value={state.lastName}
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full pt-5">
          <div className="flex flex-col md:w-1/2">
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              type="text"
              className="border-1 border-gray-300 p-2 rounded-md"
              placeholder="Enter phone"
              onChange={handleChange}
              value={state.phone}
              required
            />
          </div>
          <div className="flex flex-col md:w-1/2">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              className="border-1 border-gray-300 p-2 rounded-md"
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={state.email}
              required
            />
          </div>
        </div>
        <div className="flex flex-col pt-5">
          <label htmlFor="phone">Message</label>
          <textarea
            name="message"
            className="border-1 border-gray-300 p-2 rounded-md"
            placeholder="Enter message"
            onChange={handleChange}
            value={state.message}
            required
          />
        </div>
        <button className="flex justify-center w-full pt-10">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default MembershipForm;
