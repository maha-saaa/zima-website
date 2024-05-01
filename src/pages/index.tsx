import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Canvas } from "@react-three/fiber";
import Layout from "src/components/Layout";
import Base from "src/components/Base";
import Cube from "src/components/Cube";

// dom components go here
const DOM = () => {
  return (
    <Layout>
      <main>
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
