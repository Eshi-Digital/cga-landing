import MapSection from "@/components/home/map-section";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import NavigationBar from "@/components/shared/navigation-bar";
import type { NextPage } from "next";
import Head from "next/head";

const Contact: NextPage = () => {
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
        <Header />
        <MapSection location={location} zoomLevel={17} />
        <Footer />
      </main>
    </div>
  );
};

export default Contact;
