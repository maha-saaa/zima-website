import styles from "./index.module.scss";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string[];
  baseVelocity: number;
}

const ParallaxText = ({ children, baseVelocity = 100 }: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const opacity = useTransform(baseX, [-30, -20], [1, 0.3]);

  const directionFactor = useRef<number>(1);
  const prevT = useRef<number>(0);
  useAnimationFrame((t) => {
    if (!prevT.current) prevT.current = t;

    const timeDelta = t - prevT.current;
    let moveBy = directionFactor.current * baseVelocity * (timeDelta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);

    prevT.current = t;
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className={styles.parallax}>
      <motion.div className={styles.scroller} style={{ x, opacity }}>
        <span>{children[0]} </span>
        <span>{children[1]} </span>
        <span>{children[2]} </span>
        <span>{children[0]} </span>
      </motion.div>
    </div>
  );
};

export default ParallaxText;
