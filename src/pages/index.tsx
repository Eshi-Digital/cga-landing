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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdAsync } from "@/store/features/event/event.slice";
import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";

const Home: NextPage = () => {
  const dispatch = useDispatch<any>();

  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

  const { fetchAdLoading, fetchAdSuccess, fetchAdError, ad } = useSelector(
    (state: any) => state.event
  );

  useEffect(() => {
    dispatch(fetchAdAsync());
  }, []);

  return (
    <div>
      <Head>
        <title>Commercial Graduates Association</title>
        <meta name="description" content="Commercial Graduates Association" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Carousel
          className="fixed z-50 hidden right-5 bottom-5 sm:block"
          style={{
            maxWidth: "330px",
            maxHeight: "100px",
          }}
        >
          {fetchAdSuccess &&
            ad.map((item: any, index: any) => (
              <div
                className="bg-slate-100 rounded-lg p-2"
                style={{
                  display: "flex",
                  maxWidth: "330px",
                  boxShadow: "0 1px 4px 1px hsla(0, 0%, 0%, 0.1)",
                  zIndex: "100",
                  maxHeight: "100px",
                  // backgroundColor: "black",
                }}
                key={index}
              >
                <span>
                  <span
                    style={{
                      display: "flex",
                    }}
                  >
                    <Image
                      alt="ad"
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/ad/${item?.imageUrl}`}
                      style={{
                        display: "block",
                        lineHeight: 1,
                        margin: 0,
                        maxWidth: "130px",
                        borderRadius: "4px",
                        // height: "",
                        objectFit: "contain",
                      }}
                      width={130}
                      height={100}
                    />
                    <p
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.5,
                        marginBottom: "16px",
                        padding: "10px",
                        textAlign: "left",
                        minWidth: "400px",
                        minHeight: "100px",
                      }}
                    >
                      {item?.title?.slice(0, 186)}
                    </p>
                  </span>
                  <p
                    style={{
                      bottom: 0,
                      display: "block",
                      fontSize: " 8px",
                      fontWeight: 600,
                      letterSpacing: ".5px",
                      lineHeight: 1,
                      padding: "6px 8px",
                      position: "absolute",
                      right: 0,
                      textAlign: "center",
                      textTransform: "uppercase",
                    }}
                  >
                    Ad by CGA
                  </p>
                </span>
              </div>
            ))}
        </Carousel>
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
