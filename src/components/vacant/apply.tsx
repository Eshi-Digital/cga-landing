import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

interface FilterProps {
  filter: boolean;
  setFilter: (filter: boolean) => void;
}

const Filter = ({ filter = false, setFilter }: FilterProps) => {
  const ref = useRef(null);

  const [type, setType] = useState("ShortTerm");
  const [sort, setSort] = useState("Ascending");
  const [loanOption, setLoanOption] = useState("Women");

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
  useEffect(() => {
    if (ref.current) {
      if (filter) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
  }, [filter]);

  return (
    <AnimatePresence>
      {filter && (
        <>
          <motion.div
            ref={ref}
            initial={{ x: "-100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed bg-white text-white shadow-lg top-0 left-0 w-full max-w-sm h-screen p-5 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pt-10">
              <div>
                <div className="text-2xl font-poppins-medium text-black">
                  Apply
                </div>
              </div>
              <button
                onClick={() => setFilter(!filter)}
                className="bg-white text-black h-8 w-8 block mb-2 rounded-full cursor-pointer"
              >
                <AiOutlineCloseCircle size={40} className="text-red-main" />
              </button>
            </div>

            <div className="mt-8 px-4 py-6 rounded-md">
              <form>
                <div className="flex flex-col gap-8 w-full">
                  <div className="flex flex-col items-start">
                    <label htmlFor="name" className="text-black">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      className="w-full"
                      placeholder="Enter name"
                      onChange={handleChange}
                      value={state.name}
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="email" className="text-black">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="w-full"
                      placeholder="Enter email"
                      onChange={handleChange}
                      value={state.email}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-8 w-full pt-5">
                  <div className="flex flex-col items-start">
                    <label htmlFor="phone" className="text-black">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="text"
                      className="w-full"
                      placeholder="Enter phone"
                      onChange={handleChange}
                      value={state.phone}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col pt-5 items-start w-full">
                  <label htmlFor="phone" className="text-black">
                    Message
                  </label>
                  <textarea
                    className="w-full"
                    name="message"
                    placeholder="Enter message"
                    onChange={handleChange}
                    value={state.message}
                    required
                  />
                </div>
                <button className="flex justify-center w-full pt-10">
                  <span className="text-black">Submit</span>
                </button>
              </form>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => setFilter(!filter)}
            className="bg-black-main/30 z-40 px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default Filter;
