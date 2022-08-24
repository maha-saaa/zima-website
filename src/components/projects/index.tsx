import styles from "./index.module.scss";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import earth from "@/public/images/earth.png";
import { useState } from "react";

type project = {
  id: string;
  name: string;
  desc: string;
  link: string;
  image: string;
};

const projectsArr: project[] = [
  {
    id: "01",
    name: "COINAGE trading platform",
    desc: "Coinage is an automated market-making (AMM) decentralised exchange (DEX) for the Binance, Polygon and Ethereum network.",
    link: "",
    image: "",
  },
  {
    id: "02",
    name: "COINAGE trading platform",
    desc: "decentralised exchange (DEX) for the Binance, Polygon and Ethereum network.",
    link: "",
    image: "",
  },
  {
    id: "03",
    name: "COINAGE trading platform",
    desc: "exchange (DEX) for the Binance, Polygon and Ethereum network.",
    link: "",
    image: "",
  },
  {
    id: "04",
    name: "COINAGE trading platform",
    desc: "Polygon and Ethereum network.",
    link: "",
    image: "",
  },
];

const Projects: React.FunctionComponent<any> = (): JSX.Element => {
  const [selectedProject, setSelectedProject] = useState<project>(
    projectsArr[0]
  );

  return (
    <section id="Projects" className={styles.wrapper}>
      <div className={styles.number}>
        {projectsArr?.map((temp) => {
          return (
            <div
              key={`${temp.id}`}
              onClick={() => setSelectedProject(temp)}
              className={
                selectedProject.id === temp.id
                  ? styles.selected
                  : styles.notSelected
              }
            >
              {temp.id}
            </div>
          );
        })}
      </div>
      <div className={styles.desc}>
        <span className={styles.header}>SELECTED WORK</span>
        <span>{selectedProject.name}</span>
        <span>{selectedProject.desc}</span>
        <span className={styles.footer}>VIEW PROJECT</span>
      </div>
      <div className={styles.image}>
        <Image src={earth} alt="earth" />
      </div>
    </section>
  );
};

export default Projects;
