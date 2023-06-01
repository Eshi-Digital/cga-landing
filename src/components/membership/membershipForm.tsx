import {
  clearCreateMembership,
  createMembershipAsync,
} from "@/store/features/membership/membership.slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const MembershipForm = () => {
  /**
   * states
   */
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [gender, setGender] = useState("Male");

  /**
   * hooks
   */
  const dispatch = useDispatch<any>();

  /**
   * selectors
   */
  const {
    createMembershipLoading,
    createMembershipSuccess,
    createMembershipError,
  } = useSelector((state: any) => state.membership);

  /**
   * functions
   */
  function handleChange(e: any) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const result = {
      name: `${state.firstName} ${state.lastName}`,
      email: state.email,
      phone: state.phone,
      message: state.message,
    };
    dispatch(createMembershipAsync(result));
  };

  /**
   * yup validation schema
   */

  /**
   * formik
   */

  /**
   * effects
   */
  useEffect(() => {
    if (createMembershipSuccess) {
      toast.success(
        "Membership created successfully. Contact the admin for further progress.",
        {
          theme: "colored",
        }
      );
      dispatch(clearCreateMembership());
      setState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
    if (createMembershipError) {
      toast.error(createMembershipError, {
        theme: "colored",
      });
    }
  }, [createMembershipSuccess, createMembershipError]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * variables
   */

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
        <div className="w-full flex justify-center items-center mt-10">
          <button
            onClick={handleSubmit}
            disabled={createMembershipLoading}
            className="flex justify-center hover:underline"
          >
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MembershipForm;
