import { useEffect, useState } from "react";
import VacancyCard from "./vacancyCard";
import Filter from "./apply";
import { useDispatch, useSelector } from "react-redux";
import { fetchVacanciesAsync } from "@/store/features/vacancy/vacanct.slice";

const VacancySection = () => {
  /**
   * states
   */

  /**
   * hooks
   */
  const dispatch = useDispatch<any>();

  /**
   * selectors
   */
  const {
    fetchVacanciesLoading,
    fetchVacanciesSuccess,
    fetchVacanciesError,
    vacancies,
  } = useSelector((state: any) => state.vacancy);

  /**
   * functions
   */

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
    dispatch(fetchVacanciesAsync());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * variables
   */
  const [filter, setFilter] = useState(false);

  const handleFilter = () => {
    setFilter(!filter);
  };

  if (fetchVacanciesLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="py-10 max-w-7xl mx-auto text-center">
      <Filter filter={filter} setFilter={handleFilter} />
      <h1 className="mb-16 text-2xl">NEW JOB VACANCIES</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 mx-4 md:my-0 md:mx-0 lg:grid-cols-3 gap-10">
        <div onClick={handleFilter} className="cursor-pointer">
          {vacancies.map((vacancy: any) => (
            <VacancyCard
              key={vacancy.id}
              type={vacancy.type}
              description={vacancy.description}
              requirements={vacancy.requirements}
              salary={vacancy.salary}
              availableSlots={vacancy.availableSlots}
              applicationDeadline={vacancy.applicationDeadline}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VacancySection;
