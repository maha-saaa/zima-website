import styles from "./index.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero: React.FunctionComponent<any> = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  return (
    <section id="Home" className={styles.wrapper}>
      <motion.span className={styles.title} style={{ x: scaleAnim }}>
        Let’s make something trendy and cool!
      </motion.span>
      <motion.span className={styles.desc} style={{ x: scaleAnim }}>
        Zima Agency works with
        <span style={{ fontWeight: "bold" }}> top rated</span> talented people
        provide <span style={{ fontWeight: "bold" }}>quality</span> services.
      </motion.span>
    </section>
  );
};

export default Hero;
