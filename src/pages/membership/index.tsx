import MembershipFee from "@/components/membership/membershipFee";
import MembershipTypeAndCriteriaSection from "@/components/membership/membershipType";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import NavigationBar from "@/components/shared/navigation-bar";
import type { NextPage } from "next";
import Head from "next/head";

const Membership: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Commercial Graduates Association</title>
        <meta name="description" content="Commercial Graduates Association" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationBar />
        <Header name="Membership" />
        <MembershipTypeAndCriteriaSection />
        <MembershipFee />
        <Footer />
      </main>
    </div>
  );
};

export default Membership;
