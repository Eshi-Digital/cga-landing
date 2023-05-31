import { useState } from "react";
import VacancyCard from "./vacancyCard";
import Filter from "./apply";

const VacancySection = () => {
  const [filter, setFilter] = useState(false);

  const handleFilter = () => {
    setFilter(!filter);
  };
  return (
    <div className="py-10 max-w-7xl mx-auto text-center">
      <Filter filter={filter} setFilter={handleFilter} />;
      <h1 className="mb-20 text-2xl">NEW JOB VACANCIES</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 mx-4 md:my-0 md:mx-0 lg:grid-cols-3 gap-10">
        <div onClick={handleFilter} className="cursor-pointer">
          <VacancyCard />
        </div>
      </div>
    </div>
  );
};

export default VacancySection;
