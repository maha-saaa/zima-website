import styles from "./index.module.scss";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Projects from "@/components/projects";
import Contact from "@/components/Contact";
import WebDesign from "../WebDesign";

const Base = (): JSX.Element => {
  return (
    <>
      <div className={styles.firstTwoSectionsWrapper}>
        <Hero />
        <WhatWeDo />
      </div>
      <WebDesign />
      <Projects />
      <Contact />
    </>
  );
};

export default Base;
