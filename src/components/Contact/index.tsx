import styles from "./index.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { wordAnimation } from "@/utils/animations";
import twitterWhite from "@/public/images/twitter-white.png";
import twitterGray from "@/public/images/twitter-gray.png";
import instagramWhite from "@/public/images/instagram-white.png";
import instagramGray from "@/public/images/instagram-gray.png";
import dribbbleWhite from "@/public/images/dribbble-white.png";
import dribbbleGray from "@/public/images/dribbble-gray.png";
import linkedinWhite from "@/public/images/linkedin-white.png";
import linkedinGray from "@/public/images/linkedin-gray.png";
import {
  TWITTER,
  INSTAGRAM,
  DRIBBLE,
  LINKEDIN,
  ZIMAEMAIL,
} from "@/constants/urls";

const socialMediaArr = [
  {
    id: "1",
    icon: twitterGray,
    hoveredIcon: twitterWhite,
    hovered: false,
    link: TWITTER,
  },
  {
    id: "2",
    icon: instagramGray,
    hoveredIcon: instagramWhite,
    hovered: false,
    link: INSTAGRAM,
  },
  {
    id: "3",
    icon: dribbbleGray,
    hoveredIcon: dribbbleWhite,
    hovered: false,
    link: DRIBBLE,
  },
  {
    id: "4",
    icon: linkedinGray,
    hoveredIcon: linkedinWhite,
    hovered: false,
    link: LINKEDIN,
  },
];

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Contact = (): JSX.Element => {
  const [socials, setSocials] = useState(socialMediaArr);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const watchFields = watch(["timeline", "budget"]);
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const onHoverIcon = (id: string) => {
    const newSocialMediaArr = socialMediaArr.map((temp) => {
      if (temp.id === id) {
        return {
          ...temp,
          hovered: true,
        };
      }
      return temp;
    });
    setSocials(newSocialMediaArr);
  };

  const onLeaveIcon = (id: string) => {
    const newSocialMediaArr = socialMediaArr.map((temp) => {
      if (temp.id === id) {
        return {
          ...temp,
          hovered: false,
        };
      }
      return temp;
    });
    setSocials(newSocialMediaArr);
  };

  return (
    <section id="Contact" className={styles.wrapper}>
      <div className={styles.social}>
        <motion.span
          initial="hidden"
          whileInView="visible"
          variants={wordAnimation}
          className={styles.underline}
        >
          Contact
        </motion.span>
        <motion.span
          initial="hidden"
          whileInView="visible"
          variants={wordAnimation}
        >
          {ZIMAEMAIL}
        </motion.span>
        <div>
          {socials.map((temp) => {
            return (
              <a
                key={temp.id}
                href={temp.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={() => onHoverIcon(temp.id)}
                onMouseLeave={() => onLeaveIcon(temp.id)}
              >
                <Image
                  src={temp.hovered ? temp.hoveredIcon : temp.icon}
                  alt="icon"
                />
              </a>
            );
          })}
        </div>
      </div>
      <div className={styles.formWrapper}>
        <motion.span
          initial="hidden"
          whileInView="visible"
          variants={wordAnimation}
        >
          Let’s Talk!
        </motion.span>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div>
            <motion.label
              initial="hidden"
              whileInView="visible"
              variants={wordAnimation}
            >{`Name & company`}</motion.label>
            <input type="name" {...register("name")} name="name" />
          </div>
          <div>
            <motion.label
              initial="hidden"
              whileInView="visible"
              variants={wordAnimation}
            >
              Email
            </motion.label>
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
            />
          </div>
          <div>
            <motion.label
              initial="hidden"
              whileInView="visible"
              variants={wordAnimation}
            >
              Project Budget
            </motion.label>
            <input
              type="range"
              min={1}
              max={100}
              {...register("budget")}
              name="budget"
            />
            <span>{`${watchFields[1]} k`}</span>
          </div>
          <div>
            <motion.label
              initial="hidden"
              whileInView="visible"
              variants={wordAnimation}
            >
              Timeline
            </motion.label>
            <input
              type="range"
              min={1}
              max={12}
              {...register("timeline")}
              name="timeline"
            />
            <span>{`${watchFields[0]} month`}</span>
          </div>
          <div>
            <motion.label
              initial="hidden"
              whileInView="visible"
              variants={wordAnimation}
            >
              Project description
            </motion.label>
            <input
              type="text"
              {...register("description")}
              name="description"
            />
          </div>
          {errors.exampleRequired && <span>This field is required</span>}
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
