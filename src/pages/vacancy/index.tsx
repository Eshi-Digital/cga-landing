import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import NavigationBar from "@/components/shared/navigation-bar";
import JobCategorySection from "@/components/vacant/jobCategorySection";
import VacancySection from "@/components/vacant/vacancySection";
import type { NextPage } from "next";
import Head from "next/head";

const Vacant: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Commercial Graduates Association</title>
        <meta name="description" content="Commercial Graduates Association" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationBar />
        <Header />
        <JobCategorySection />
        <VacancySection />
        <Footer />
      </main>
    </div>
  );
};

export default Vacant;
