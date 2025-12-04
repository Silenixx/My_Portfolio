import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../context/LanguageContext";

export const Hero = () => {
  const { language } = useLanguage();

  // ---- TU écris toi-même les textes ----
  const title =
    language === "en"
      ? "Hi, I'm Lukas"
      : "Salut, je suis Lukas";

  const description =
    language === "en"
      ? "I'm a full-stack developer with 5+ years of experience, passionate about crafting fast, scalable, and user-friendly web applications. From intuitive front-end interfaces to powerful back-end architectures, I bring ideas to life through code. Let's build something great together!"
      : "Développeur full-stack avec plus de 5 ans d'expérience, je suis passionné par la création d'applications web performantes, évolutives et conviviales. Des interfaces front-end intuitives aux architectures back-end robustes, je donne vie à vos idées grâce au code. Créons ensemble un projet exceptionnel !";

  const contactLabel =
    language === "en"
      ? "Contact Me"
      : "Me Contacter";
  // ---------------------------------------

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>

        <a href="mailto:lukas.blanchot@hotmail.fr" className={styles.contactBtn}>
          {contactLabel}
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
