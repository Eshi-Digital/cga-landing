import AboutUsCard from "./about-us-card";

interface HomeAboutUsProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const AboutUsSection = () => {
  const aboutUs: HomeAboutUsProps[] = [
    {
      title: "CGA Profile",
      description:
        "Said be brought bel also fills kind face creepeth gathired their sine good under is beast",
      icon: "/static/icons/svgs/cga_profile.svg",
      color: "bg-red-200",
    },
    {
      title: "Membership",
      description:
        "Said be brought bel also fills kind face creepeth gathired their sine good under is beast",
      icon: "/static/icons/svgs/cga_membership.svg",
      color: "bg-green-200",
    },
    {
      title: "Facilities",
      description:
        "Said be brought bel also fills kind face creepeth gathired their sine good under is beast",
      icon: "/static/icons/svgs/cga_facilities.svg",
      color: "bg-blue-200",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-4 md:py-28">
      <div className="mb-8">
        <h1 className="text-4xl font-extralight text-center">
          Something About Us
        </h1>
      </div>
      <div className="max-w-5xl">
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
          sed mollitia laboriosam eius tempora modi eos asperiores alias
          possimus recusandae minima voluptatem dolorem praesentium.
        </p>
      </div>
      <div className="flex flex-col px-2 md:flex-row xl:mx-20 xl:gap-14 gap-4 my-8">
        {aboutUs.map((aboutUs) => (
          <AboutUsCard
            key={aboutUs.title}
            title={aboutUs.title}
            description={aboutUs.description}
            icon={aboutUs.icon}
            color={aboutUs.color}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUsSection;
