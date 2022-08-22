import styles from "./index.module.scss";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Projects from "@/components/projects";
import About from "@/components/About";

const Base: React.FunctionComponent<any> = (): JSX.Element => {
  return (
    <>
      <div className={styles.firstTwoSectionsWrapper}>
        <Hero />
        <WhatWeDo />
      </div>
      <Projects />
      <About />
    </>
  );
};

export default Base;
