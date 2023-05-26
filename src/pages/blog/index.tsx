import BlogMainSecton from "@/components/blog/blog-main-section";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import NavigationBar from "@/components/shared/navigation-bar";
import type { NextPage } from "next";
import Head from "next/head";

const Blog: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Commercial Graduates Association</title>
        <meta name="description" content="Commercial Graduates Association" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationBar />
        <Header name="Blog" />
        <BlogMainSecton />
        <Footer />
      </main>
    </div>
  );
};

export default Blog;
