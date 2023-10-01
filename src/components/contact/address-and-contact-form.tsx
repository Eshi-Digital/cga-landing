import {
  clearSendContactUs,
  sendContactUsAsync,
} from "@/store/features/contact-us/contact-us.slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

interface ContactUsForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function AddressAndContactForm() {
  /**
   * states
   */
  const [contactUsForm, setContactUsForm] = useState<ContactUsForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  /**
   * hooks
   */
  const dispatch = useDispatch<any>();

  /**
   * selectors
   */
  const { sendContactUsLoading, sendContactUsSuccess, sendContactUsError } =
    useSelector((state: any) => state.contactUs);

  /**
   * functions
   */
  const handleSubmit = (e: any) => {
    dispatch(sendContactUsAsync(contactUsForm));
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
    if (sendContactUsSuccess) {
      toast.success("Contact us sent", {
        theme: "colored",
      });
      setContactUsForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      dispatch(clearSendContactUs());
    }
    if (sendContactUsError) {
      toast.error(sendContactUsError, {
        theme: "colored",
      });
      dispatch(clearSendContactUs());
    }
  }, [sendContactUsSuccess, sendContactUsError]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * variables
   */

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
          <div className="flex flex-col gap-y-2">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="border-1 border-gray-300 p-2 rounded-md"
              onChange={(e) =>
                setContactUsForm({ ...contactUsForm, name: e.target.value })
              }
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="border-1 border-gray-300 p-2 rounded-md"
              onChange={(e) => {
                setContactUsForm({ ...contactUsForm, email: e.target.value });
              }}
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="border-1 border-gray-300 p-2 rounded-md"
              onChange={(e) =>
                setContactUsForm({ ...contactUsForm, subject: e.target.value })
              }
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border-1 border-gray-300 p-2 rounded-md"
              onChange={(e) =>
                setContactUsForm({ ...contactUsForm, message: e.target.value })
              }
            />
            <button
              disabled={sendContactUsLoading}
              className="bg-primary text-white p-2 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out"
              onClick={handleSubmit}
            >
              {sendContactUsLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
