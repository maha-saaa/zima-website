import styles from "./index.module.scss";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import reticular from "@/public/images/reticular.png";
import avacadoCamp from "@/public/images/3dAvacadoCamp.png";
import zinoNftLandingPage from "@/public/images/zinoNftLandingPage.png";
import lonelyAlNftCollection from "@/public/images/lonelyAlNftCollection.png";
import mobileCryptoWallet from "@/public/images/mobileCryptoWallet.png";
import { wordAnimation } from "@/utils/animations";
import {
  RETICULAR,
  AVACADOCAMP,
  ZINONFTLANDINGPAGE,
  LONELYALNFTCOLLECTION,
  MOBILECRYPTOWALLET,
} from "@/constants/urls";

type project = {
  id: string;
  name: string;
  desc: string;
  link: string;
  image: StaticImageData;
};

const projectsArr: project[] = [
  {
    id: "01",
    name: "Reticular Trading Platform",
    desc: "As we can see the chart is easy to understand, multiple indicators along with the tools can be applied in the chart and it is free. The candlestick pattern helps give the reader a clearer view.",
    link: RETICULAR,
    image: reticular,
  },
  {
    id: "02",
    name: "3D Avacado Camp",
    desc: "In Zima we can create your NFT collection, your website, and your Smart Contract! we can help you choosing your traits and Rarity. come up with your collection Idea and leave the rest to us!",
    link: AVACADOCAMP,
    image: avacadoCamp,
  },
  {
    id: "03",
    name: "Zino NFT Marketplace",
    desc: "Welcome to the NFT Marketplace Explore page, You can Create, Buy and Sell Hype NFTs here!!",
    link: ZINONFTLANDINGPAGE,
    image: zinoNftLandingPage,
  },
  {
    id: "04",
    name: "LonelyAl NFT Collection",
    desc: "LonelyAl is one of the NFT collections that we worked on, we designed and generated the NFTs.",
    link: LONELYALNFTCOLLECTION,
    image: lonelyAlNftCollection,
  },
  {
    id: "05",
    name: "Crypto Wallet",
    desc: "Have an Idea for a new wallet app? we have designed and developed +10 cryptocurrency wallets!",
    link: MOBILECRYPTOWALLET,
    image: mobileCryptoWallet,
  },
];

const Projects = (): JSX.Element => {
  const [selectedProject, setSelectedProject] = useState<project>(
    projectsArr[0]
  );

  return (
    <section id="Projects" className={styles.wrapper}>
      <div className={styles.data}>
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
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  variants={wordAnimation}
                >
                  {temp.id}
                </motion.span>
              </div>
            );
          })}
        </div>
        <div className={styles.desc}>
          <motion.span
            className={styles.header}
            initial="hidden"
            whileInView="visible"
            variants={wordAnimation}
          >
            SELECTED WORK
          </motion.span>
          <AnimatePresence exitBeforeEnter>
            <motion.span
              key={selectedProject ? selectedProject.id : "empty"}
              initial="hidden"
              whileInView="visible"
              variants={wordAnimation}
            >
              {selectedProject.name}
            </motion.span>
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter>
            <motion.span
              key={selectedProject ? selectedProject.id : "empty"}
              initial="hidden"
              whileInView="visible"
              variants={wordAnimation}
            >
              {selectedProject.desc}
            </motion.span>
          </AnimatePresence>
          <a
            key={selectedProject.id}
            href={selectedProject.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span
              className={styles.footer}
              initial="hidden"
              whileInView="visible"
              variants={wordAnimation}
            >
              VIEW PROJECT
            </motion.span>
          </a>
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={selectedProject ? selectedProject.id : "empty"}
          className={styles.image}
          animate={{
            rotate: selectedProject ? 360 : 0,
          }}
          transition={{ duration: 1 }}
        >
          <Image
            src={selectedProject.image}
            alt="earth"
            width={454}
            height={454}
          />
        </motion.div>
      </AnimatePresence>
      <a
        key={selectedProject.id}
        href={selectedProject.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.span
          className={styles.mobileFooter}
          initial="hidden"
          whileInView="visible"
          variants={wordAnimation}
        >
          VIEW PROJECT
        </motion.span>
      </a>
    </section>
  );
};

export default Projects;
