import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Canvas } from "@react-three/fiber";
import Layout from "@/components/Layout";
import Base from "@/components/Base";
import Cube from "@/components/Cube";

// dom components go here
const DOM = () => {
  return (
    <Layout>
      <main style={{ backgroundColor: "black" }}>
        <Base />
      </main>
    </Layout>
  );
};

// canvas components go here
const R3F = () => {
  return (
    <Canvas style={{ position: "absolute", top: 50 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube position={[0, 0, 0]} />
    </Canvas>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />

      <R3F />
      <DOM />
    </>
  );
};

export default Home;
