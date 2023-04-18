import AboutUsCard from "./about-us-card";

const AboutUsSection = () => {
  return (
    <div className="flex flex-col items-center py-28">
      <div className="mb-8">
        <h1 className="text-4xl font-extralight">Something About Us</h1>
      </div>
      <div className="max-w-5xl">
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
          sed mollitia laboriosam eius tempora modi eos asperiores alias
          possimus recusandae minima voluptatem dolorem praesentium.
        </p>
      </div>
      <div className="flex flex-row mx-20 gap-8 my-8">
        <AboutUsCard />
        <AboutUsCard />
        <AboutUsCard />
      </div>
    </div>
  );
};

export default AboutUsSection;
