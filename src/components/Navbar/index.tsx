import styles from "./index.module.scss";
import Image from "next/image";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import zimaLogo from "@/public/images/zima-logo.png";
import { wordAnimation } from "@/utils/animations";

type navbarMenuType = {
  key: string;
  title: string;
}[];

const navbarMenu: navbarMenuType = [
  {
    key: "Home",
    title: "Home",
  },
  {
    key: "Whatwedo",
    title: "What we do",
  },
  {
    key: "Projects",
    title: "Projects",
  },
];

const Navbar: React.FunctionComponent<any> = (): JSX.Element => {
  return (
    <motion.section
      className={styles.wrapper}
      // initial="hidden"
      // whileInView="visible"
      // variants={wordAnimation}
    >
      <div>
        <Image src={zimaLogo} alt="logo" />
      </div>
      <div className={styles.menu}>
        {navbarMenu?.map((temp) => (
          <li key={temp.key}>
            <Link
              activeClass="active"
              to={temp.key}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {temp.title}
            </Link>
          </li>
        ))}
      </div>
      <div className={styles.button}>
        <Link
          activeClass="active"
          to={"Contact"}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Contact
        </Link>
      </div>
    </motion.section>
  );
};

export default Navbar;
