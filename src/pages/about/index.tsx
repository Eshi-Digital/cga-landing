import AboutContributionSection from "@/components/about/about-contribution-section";
import AboutGovernanceSection from "@/components/about/about-governance-section";
import AboutMainSection from "@/components/about/about-main-section";
import AboutMissionSection from "@/components/about/about-mission-section";
import AboutObjectiveSection from "@/components/about/about-objective-section";
import AboutVisionSection from "@/components/about/about-vision-section";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import NavigationBar from "@/components/shared/navigation-bar";
import type { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Commercial Graduates Association</title>
        <meta name="description" content="Commercial Graduates Association" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationBar />
        <Header name="About" />
        <AboutMainSection />
        <AboutMissionSection />
        <AboutVisionSection />
        <AboutObjectiveSection />
        <AboutGovernanceSection />
        <AboutContributionSection />
        <Footer />
      </main>
    </div>
  );
};

export default About;
