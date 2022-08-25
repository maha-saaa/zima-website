import styles from "./index.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";
import arrow from "@/public/images/arrow.png";

const Hero = (): JSX.Element => {
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
      <Link
        activeClass="active"
        to={"Projects"}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={styles.contact}
      >
        Our Works
      </Link>
      <div className={styles.scroll}>
        <span>Scroll</span>
        <Image src={arrow} alt="arrow" />
      </div>
    </section>
  );
};

export default Hero;
