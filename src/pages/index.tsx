import AnoutMembershipSection from "@/components/home/about-membership-section";
import AboutUsSection from "@/components/home/about-us-section";
import ContactUsSection from "@/components/home/contact-us-section";
import FoundingSection from "@/components/home/founding-history-section";
import HeroSection from "@/components/home/hero-section";
import MapSection from "@/components/home/map-section";
import NewsSection from "@/components/home/news-section";
import TeamSection from "@/components/home/team-section";
import Footer from "@/components/shared/footer";
import NavigationBar from "@/components/shared/navigation-bar";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <div>
      <Head>
        <title>Commercial Graduates Association</title>
        <meta name="description" content="Commercial Graduates Association" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationBar />
        <HeroSection />
        <AboutUsSection />
        <AnoutMembershipSection />
        <FoundingSection />
        <TeamSection />
        <NewsSection />
        <ContactUsSection />
        <MapSection location={location} zoomLevel={17} /> <Footer />
      </main>
    </div>
  );
};

export default Home;
