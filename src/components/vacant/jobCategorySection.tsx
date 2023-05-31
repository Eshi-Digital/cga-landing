import { AiFillDollarCircle } from "react-icons/ai";

const JobCategorySection = () => {
  return (
    <div className="py-10 max-w-7xl mx-auto text-center">
      <h1 className="mb-10 text-4xl uppercase">Most demoand job categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 lg:px-0 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-3 bg-purple-100 p-8 rounded-lg">
          <div>
            <AiFillDollarCircle size={40} className="text-primary" />
          </div>
          <div>Marketing</div>
        </div>
        <div className="flex flex-col items-start gap-3 bg-yellow-100 p-8 rounded-lg">
          <div>
            <AiFillDollarCircle size={40} className="text-primary" />
          </div>
          <div>Finance</div>
        </div>
        <div className="flex flex-col items-start gap-3 bg-green-100 p-8 rounded-lg">
          <div>
            <AiFillDollarCircle size={40} className="text-primary" />
          </div>
          <div>Human Resource</div>
        </div>
        <div className="flex flex-col items-start gap-3 bg-blue-100 p-8 rounded-lg">
          <div>
            <AiFillDollarCircle size={40} className="text-primary" />
          </div>
          <div>Graphics Designer</div>
        </div>
      </div>
    </div>
  );
};

export default JobCategorySection;
