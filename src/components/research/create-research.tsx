import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { MdChangeCircle, MdRemove } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  createResearchAsync,
  clearCreateResearch,
} from "@/store/features/event/event.slice";

interface FilterProps {
  filter: boolean;
  setFilter: (filter: boolean) => void;
  vacancyId: string;
}

const CreateResearch = ({ filter = false, setFilter }: FilterProps) => {
  const ref = useRef(null);

  const [type, setType] = useState("ShortTerm");
  const [sort, setSort] = useState("Ascending");
  const [loanOption, setLoanOption] = useState("Women");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch<any>();
  const {
    createResearchSuccess,
    createResearchLoading,
    createResearchError,
    code,
  } = useSelector((state: any) => state.event);

  const [state, setState] = useState({
    title: "",
    code: null,
    note: "",
    file: null,
    email: "",
  });

  const [file, setFile] = useState<File | null>(null);

  function handleFileChange(e: any) {
    setFile(e.target.files[0]);
  }

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

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", state.title);
    formData.append("note", state.note);
    formData.append("code", state.code);
    formData.append("email", state.email);
    formData.append("file", file as File);

    dispatch(createResearchAsync(formData));
  };

  useEffect(() => {
    if (createResearchSuccess) {
      toast.success(`Research sent successfully, your code is ${code}`, {
        theme: "colored",
      });
      setFilter(false);
      dispatch(clearCreateResearch());
      setState({
        title: "",
        note: "",
        code: null,
        email: "",
        file: null,
      });
    }
    if (createResearchError) {
      toast.error(`Error sending application, ${createResearchError.message}`, {
        theme: "colored",
      });
      dispatch(clearCreateResearch());
    }
  }, [createResearchSuccess, createResearchError]);

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
              <div className="text-2xl font-poppins-medium text-black">
                Submit your research
              </div>
              <button
                onClick={() => setFilter(!filter)}
                className="bg-white text-black h-4 w-4 block rounded-full cursor-pointer"
              >
                <AiOutlineCloseCircle size={30} className="text-red-main" />
              </button>
            </div>

            <div className="mt-8 px-4 py-6 rounded-md">
              <form>
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="title"
                      className="text-black text-sm font-poppins-semibold"
                    >
                      Title
                    </label>
                    <input
                      name="title"
                      type="text"
                      className="w-full border-1 border-gray-300 p-2 rounded-md text-black"
                      placeholder="Enter title"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="email"
                      className="text-black text-sm font-poppins-semibold"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="w-full border-1 border-gray-300 p-2 rounded-md text-black"
                      placeholder="Enter email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-8 w-full pt-5">
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="code"
                      className="text-black text-sm font-poppins-semibold"
                    >
                      Code
                    </label>
                    <input
                      name="code"
                      type="text"
                      className="w-full border-1 border-gray-300 p-2 rounded-md text-black"
                      placeholder="Enter code"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col pt-5 items-start w-full">
                  <label
                    htmlFor="file"
                    className="text-black text-sm font-poppins-semibold"
                  >
                    Research file
                  </label>
                  {file == null ? (
                    <input
                      type="file"
                      className="w-full border-1 border-gray-300 p-2 rounded-md text-black"
                      name="file"
                      placeholder="Enter file (only PDF)"
                      onChange={handleFileChange}
                      required={true}
                    />
                  ) : (
                    <div className="text-black border p-2 rounded-md flex items-center gap-2">
                      <span>File added</span>
                      <span
                        className="cursor-pointer"
                        onClick={() => {
                          setFile(null);
                        }}
                      >
                        <MdRemove className="text-primary" size={20} />
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col pt-5 items-start w-full">
                  <label
                    htmlFor="note"
                    className="text-black text-sm font-poppins-semibold"
                  >
                    Note
                  </label>
                  <textarea
                    className="w-full border-1 border-gray-300 p-2 rounded-md text-black"
                    name="note"
                    placeholder="Enter note"
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white p-2 rounded-md w-full mt-5"
                  onClick={handleSubmit}
                  disabled={createResearchLoading}
                >
                  Send {createResearchLoading && `...`}
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

export default CreateResearch;
