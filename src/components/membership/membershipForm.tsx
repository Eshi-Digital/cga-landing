import { useState } from "react";

const MembershipForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [gender, setGender] = useState("Male");

  function handleChange(e: any) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  return (
    <div className="px-5 md:px-20 pb-10">
      <h1 className="pb-4 text-2xl uppercase w-full text-center">
        Be our member
      </h1>
      <form>
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="flex flex-col md:w-1/2">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter name"
              onChange={handleChange}
              value={state.name}
              required
            />
          </div>
          <div className="flex flex-col md:w-1/2">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={state.email}
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full pt-10">
          <div className="flex flex-col md:w-1/2">
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              type="text"
              placeholder="Enter phone"
              onChange={handleChange}
              value={state.phone}
              required
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label>Gender</label>
            <div className="pt-2">
              <input
                type="radio"
                value="Male"
                name="gender"
                checked={gender === "Male"}
                onChange={(value) => {
                  setGender("Male");
                }}
              />{" "}
              <span className="pr-10">Male</span>
              <input
                type="radio"
                value="Female"
                name="gender"
                checked={gender === "Female"}
                onChange={(value) => {
                  setGender("Female");
                }}
              />{" "}
              Female
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-5">
          <label htmlFor="phone">Message</label>
          <textarea
            name="message"
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
