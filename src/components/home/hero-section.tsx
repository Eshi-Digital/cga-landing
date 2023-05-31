const HeroSection = () => {
  return (
    <div className="bg-hero h-[90vh] bg-no-repeat bg-cover flex items-center justify-center py-28">
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="text-center text-white text-4xl font-PoiretOne-Regular">
          We Are Creative
        </div>
        <div className="text-center text-white font-PoiretOne-Regular text-4xl">
          Commercial Graduates Association
        </div>
        <div className="text-center text-white font-poppins-light text-md">
          A single place to share, curate and discover visual that tells a story
        </div>
        <div className="flex-col md:flex-row flex gap-8 py-6">
          <div className="bg-white rounded-full px-12 py-3 text-primary">
            Learn More
          </div>
          <div className="bg-primary rounded-full px-12 py-3 text-white">
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
