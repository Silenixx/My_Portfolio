import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Lukas</h1>
        <p className={styles.description}>
        I'm a full-stack developer with 5+ years of experience, passionate about crafting fast, scalable, and user-friendly web applications. From intuitive front-end interfaces to powerful back-end architectures, I bring ideas to life through code. Let's build something great together!
        </p>
        <a href="mailto:lukas.blanchot@hotmail.fr" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
