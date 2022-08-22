import styles from "./index.module.scss";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import earth from "@/public/images/earth.png";
import grayCircle from "@/public/images/gray-circle.png";

const Projects: React.FunctionComponent<any> = (): JSX.Element => {
  const { scrollYProgress } = useScroll();

  return (
    <section id="Projects" className={styles.wrapper}>
      <div>
        <span>COINAGE trading platform</span>
      </div>
      <div>
        {/* <Image src={grayCircle} alt="grayCircle" /> */}
        <Image src={earth} alt="earth" />
      </div>
    </section>
  );
};

export default Projects;
