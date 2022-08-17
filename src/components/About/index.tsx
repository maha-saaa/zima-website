import styles from "./index.module.scss";
import { motion } from "framer-motion";

const About: React.FunctionComponent<any> = (): JSX.Element => {
  return (
    <section id="About" className={styles.wrapper}>
      <motion.span
        className={styles.title}
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        abouttttt
      </motion.span>
    </section>
  );
};

export default About;
