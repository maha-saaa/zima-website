import styles from "./index.module.scss";
import Hero from "src/components/Hero";
import WhatWeDo from "src/components/WhatWeDo";
import Projects from "src/components/projects";
import Contact from "src/components/Contact";
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
