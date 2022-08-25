import styles from "./index.module.scss";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

const socialMediaArr = [
  {
    id: "1",
    icon: "",
    link: "",
  },
  {
    id: "1",
    icon: "",
    link: "",
  },
  {
    id: "1",
    icon: "",
    link: "",
  },
  {
    id: "1",
    icon: "",
    link: "",
  },
  {
    id: "1",
    icon: "",
    link: "",
  },
];

type Inputs = {
  example: string;
  exampleRequired: string;
};

const About = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <section id="Contact" className={styles.wrapper}>
      <div className={styles.contact}>
        <span>Contact</span>
        <span>Info@zimaagency.com</span>
        <span>facebook</span>
      </div>
      <div className={styles.formWrapper}>
        <span>Let’s Talk!</span>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div>
            <label>{`Name & company`}</label>
            <input type="name" name="name" {...register("name")} />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <label>Project Budget</label>
            <input
              type="range"
              name="budget"
              min={10000}
              max={100000}
              {...register("budget")}
            />
          </div>
          <div>
            <label>Project description</label>
            <input
              type="text"
              name="description"
              {...register("description")}
            />
          </div>
          {errors.exampleRequired && <span>This field is required</span>}
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default About;
