import styles from "./index.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useState } from "react";
import { wordAnimation } from "@/utils/animations";
import twitterWhite from "@/public/images/twitter-white.svg";
import twitterGray from "@/public/images/twitter-gray.svg";
import instagramWhite from "@/public/images/instagram-white.svg";
import instagramGray from "@/public/images/instagram-gray.svg";
import dribbbleWhite from "@/public/images/dribbble-white.svg";
import dribbbleGray from "@/public/images/dribbble-gray.svg";
import linkedinWhite from "@/public/images/linkedin-white.svg";
import linkedinGray from "@/public/images/linkedin-gray.svg";
import {
  TWITTER,
  INSTAGRAM,
  DRIBBLE,
  LINKEDIN,
  ZIMAEMAIL,
} from "@/utils/constants";

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

const budgetArr = [
  {
    id: "0",
    text: "Under $10k",
  },
  {
    id: "1",
    text: "$10k-$20k",
  },
  {
    id: "2",
    text: "$20k-$50k",
  },
  {
    id: "3",
    text: "$50k-$100k",
  },
  {
    id: "4",
    text: "$100k+",
  },
];

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Contact = (): JSX.Element => {
  const [socials, setSocials] = useState(socialMediaArr);
  const [selectedBudget, setSelectedBudget] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  // @ts-ignore: Unreachable code error
  const watchFields = watch(["timeline"]);

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    const formData = {
      email: data.email,
      subject: `${data.nameAndCompany}'s Project Offer`,
      message: `company name: ${data.nameAndCompany},
      email: ${data.email},
      budget: ${data.budget},
      timeline: ${data.timeline},
      description: ${data.description}`,
    };

    await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

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

  const BudgetField = ({ value, onChange }: any) => (
    <div className={styles.budget}>
      {budgetArr.map((temp) => (
        <button
          key={temp.id}
          value={value}
          onClick={() => {
            onChange(temp.text);
            setSelectedBudget(temp.id);
          }}
        >
          <p className={temp.id == selectedBudget ? styles.selectedBudget : ""}>
            {temp.text}
          </p>
        </button>
      ))}
    </div>
  );

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

            <input
              type="name"
              // @ts-ignore: Unreachable code error
              {...register("nameAndCompany", { required: true })}
              name="nameAndCompany"
            />
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
              // @ts-ignore: Unreachable code error
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
            <Controller
              control={control}
              // @ts-ignore: Unreachable code error
              name="budget"
              // @ts-ignore: Unreachable code error
              defaultValue={"$10k-$20k"}
              render={({ field: { onChange, value } }) => (
                <BudgetField onChange={onChange} value={value} />
              )}
            />
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
              defaultValue={1}
              // @ts-ignore: Unreachable code error
              {...register("timeline")}
              name="timeline"
            />
            <span>{`${watchFields[0] ?? 1} month`}</span>
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
              // @ts-ignore: Unreachable code error
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
