import styles from "./index.module.scss";
import Hero from "src/features/Hero";
import WhatWeDo from "src/features/WhatWeDo";
import Projects from "src/features/projects";
import Contact from "src/features/Contact";
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
