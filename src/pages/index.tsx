import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Layout from "@/components/Layout";
import Base from "@/components/Base";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <Layout>
        <main>
          <Base />
        </main>
      </Layout>
    </>
  );
};

export default Home;
