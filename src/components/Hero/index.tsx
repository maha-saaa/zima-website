import styles from "./index.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero: React.FunctionComponent<any> = (): JSX.Element => {
  const { scrollYProgress, scrollY } = useScroll();
  const transferAnim = useTransform(scrollY, [0, 300], [0, -1000], {
    clamp: false,
  });

  return (
    <section id="Home" className={styles.wrapper}>
      <motion.span className={styles.title} style={{ x: transferAnim }}>
        Let’s make something trendy and cool!
      </motion.span>
      <motion.span className={styles.desc} style={{ x: transferAnim }}>
        Zima Agency works with
        <span style={{ fontWeight: "bold" }}> top rated</span> talented people
        provide <span style={{ fontWeight: "bold" }}>quality</span> services.
      </motion.span>
    </section>
  );
};

export default Hero;
