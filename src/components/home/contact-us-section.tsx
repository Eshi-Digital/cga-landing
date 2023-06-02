import {
  clearSendContactUs,
  sendContactUsAsync,
} from "@/store/features/contact-us/contact-us.slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getLocaleContent } from "../../utils/localeUtil";
import { useRouter } from "next/router";


interface ContactUsForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUsSection = () => {
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
  const router = useRouter();

    const localized = getLocaleContent(router.locale as string);
  return (
    <div className="text-center py-32">
      <p className="font-poppins-medium text-lg mb-10">{localized.contact_us}</p>
      <h1 className="text-3xl mb-8">{localized.get_in_touch}!</h1>
      <p className="max-w-4xl mx-auto text-gray-500 mb-8 md:mb-32">
       {localized.drop}
      </p>
      <div className="flex gap-4 flex-col-reverse md:flex-row px-2">
        <div className="w-full flex justify-center md:w-2/3">
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold md:mb-12 mb-3 md:hidden flex my-4">
             {localized.drop}
            </h1>
            <div className="flex flex-col gap-y-2">
              <input
                value={contactUsForm.name}
                name="name"
                type="text"
                placeholder="Name"
                className="border-1 border-gray-300 p-2 rounded-md"
                onChange={(e) =>
                  setContactUsForm({ ...contactUsForm, name: e.target.value })
                }
              />
              <input
                value={contactUsForm.email}
                name="email"
                type="email"
                placeholder="Email"
                className="border-1 border-gray-300 p-2 rounded-md"
                onChange={(e) => {
                  setContactUsForm({ ...contactUsForm, email: e.target.value });
                }}
              />
              <input
                value={contactUsForm.subject}
                name="subject"
                type="text"
                placeholder="Subject"
                className="border-1 border-gray-300 p-2 rounded-md"
                onChange={(e) =>
                  setContactUsForm({
                    ...contactUsForm,
                    subject: e.target.value,
                  })
                }
              />
              <textarea
                value={contactUsForm.message}
                name="message"
                placeholder="Message"
                className="border-1 border-gray-300 p-2 rounded-md"
                onChange={(e) =>
                  setContactUsForm({
                    ...contactUsForm,
                    message: e.target.value,
                  })
                }
              />
              <button
                disabled={sendContactUsLoading}
                className="bg-primary text-white p-2 rounded-md"
                onClick={handleSubmit}
              >
                {sendContactUsLoading ? "Sending..." : "Send"}
              </button>
            </div>
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
