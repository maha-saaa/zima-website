import styles from "./index.module.scss";
import Image from "next/image";
import { Link } from "react-scroll";
import zimaLogo from "@/public/images/zima-logo.png";

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
  {
    key: "About",
    title: "About",
  },
];

const Navbar: React.FunctionComponent<any> = (): JSX.Element => {
  return (
    <section className={styles.wrapper}>
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
        <a href={"./"} target="_blank" rel="noreferrer noopener">
          <span>Connect</span>
        </a>
      </div>
    </section>
  );
};

export default Navbar;
