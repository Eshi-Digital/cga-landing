import AboutUsSection from "@/components/home/about-us-section";
import HeroSection from "@/components/home/hero-section";
import NavigationBar from "@/components/shared/navigation-bar";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
      </main>
    </div>
  );
};

export default Home;
