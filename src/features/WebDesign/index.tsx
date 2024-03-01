import styles from "./index.module.scss";
import ParallaxText from "src/features/ParallaxText";

const firstLine = ["Mobile App", "3D Design", "Wireframing"];
const secondLine = ["Illustraion", "Development", "Strategy"];
const thirdLine = ["Motion Design", "User Experience", "Prototyping"];

const WebDesign = (): JSX.Element => {
  return (
    <section id="WebDesign" className={styles.wrapper}>
      <ParallaxText baseVelocity={-2}>{firstLine}</ParallaxText>
      <ParallaxText baseVelocity={2}>{secondLine}</ParallaxText>
      <ParallaxText baseVelocity={-2}>{thirdLine}</ParallaxText>
    </section>
  );
};

export default WebDesign;
