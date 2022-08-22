import styles from "./index.module.scss";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    scale: 0.65,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
};

const WhatWeDo: React.FunctionComponent<any> = (): JSX.Element => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef);
  const { scrollYProgress } = useScroll();
  const titleTransferAnim = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 100 * -1.5]
  );
  const descXTransferAnim = useTransform(scrollYProgress, [0, 0.25], [1200, 0]);
  const descYTransferAnim = useTransform(scrollYProgress, [0, 0.3], [-900, 0]);

  return (
    <section id="Whatwedo" className={styles.wrapper}>
      <div className={styles.text}>
        <motion.span
          className={styles.title}
          ref={titleRef}
          variants={variants}
          initial="intial"
          animate={isInView ? "animate" : "initial"}
          style={{ y: titleTransferAnim }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          From design to code and back.
        </motion.span>
        <motion.span
          className={styles.desc}
          style={{
            x: descXTransferAnim,
            y: descYTransferAnim,
          }}
        >
          We are a full-service digital agency that builds immersive user
          experience. Our team creates an exceptional visualization and
          thought-out functionality. We believe, our clients deserve to be
          remarkable in their business. The studio develops the products people
          appreciate all around the world.
        </motion.span>
      </div>
      <div>
        <motion.div
          className={styles.box}
          ref={titleRef}
          variants={variants}
          initial="intial"
          animate={isInView ? "animate" : "initial"}
          style={{ y: titleTransferAnim }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </section>
  );
};

export default WhatWeDo;
