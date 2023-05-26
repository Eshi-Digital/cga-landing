import VacancyCard from "./vacancyCard";

const VacancySection = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto text-center">
      <h1 className="mb-20 text-2xl">NEW JOB VACANCIES</h1>
      <div className="grid grid-cols-3 gap-10">
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
      </div>
    </div>
  );
};

export default VacancySection;
