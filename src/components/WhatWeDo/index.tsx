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

const WhatWeDo = (): JSX.Element => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef);
  const { scrollYProgress } = useScroll();
  const titleTransferAnim = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 100 * -1.5]
  );
  const descXTransferAnim = useTransform(scrollYProgress, [0, 0.1], [1200, 0]);
  const descYTransferAnim = useTransform(scrollYProgress, [0, 0.1], [-1000, 0]);

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
          Full-service design and development agency ☄️
        </motion.span>
        <motion.span
          className={styles.desc}
          style={{
            x: descXTransferAnim,
            y: descYTransferAnim,
          }}
        >
          We are Blockchain specialists with extensive design and development
          expertise, specifically in the fast-growing blockchain space.
          Designing user interfaces, user experiences, 3D design, illustrations,
          prototyping, etc. We build your DApps, NFT marketplaces, and NFT
          collections, with our experience in this giant industry our team has
          the expertise to bring your vision to life.
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
