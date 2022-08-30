import styles from "./index.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";
import arrow from "@/public/images/arrow.png";
import { wordAnimation } from "@/utils/animations";

const Hero = (): JSX.Element => {
  const { scrollYProgress, scrollY } = useScroll();
  const transferAnim = useTransform(scrollY, [0, 300], [0, -1000], {
    clamp: false,
  });

  return (
    <section id="Home" className={styles.wrapper}>
      <motion.span
        className={styles.title}
        style={{ x: transferAnim }}
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true }}
        variants={wordAnimation}
      >
        Let’s make something trendy and cool!
      </motion.span>
      <motion.span
        className={styles.desc}
        style={{ x: transferAnim }}
        initial="hidden"
        whileInView="visible"
        variants={wordAnimation}
      >
        Zima Agency works with
        <span style={{ fontWeight: "bold" }}> top rated</span> talented people
        provide <span style={{ fontWeight: "bold" }}>quality</span> services.
      </motion.span>
      <Link
        activeClass="active"
        to={"Projects"}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={styles.ourWork}
      >
        Our Works
      </Link>
      <div className={styles.scroll}>
        <motion.span
          initial="hidden"
          whileInView="visible"
          variants={wordAnimation}
        >
          Scroll
        </motion.span>
        <Image src={arrow} alt="arrow" height={100} />
      </div>
    </section>
  );
};

export default Hero;
