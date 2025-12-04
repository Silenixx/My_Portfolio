import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../context/LanguageContext";

export const Contact = () => {
  const { language } = useLanguage();

  // -- TU écris les textes ici --
  const title = language === "en" ? "Contact" : "Contact";
  const subtitle =
    language === "en"
      ? "Feel free to reach out!"
      : "N'hésite pas à me contacter !";

  const mailLabel = language === "en" ? "my mail" : "mon email";
  const linkedinLabel =
    language === "en" ? "linkedin.com" : "mon LinkedIn";
  const githubLabel =
    language === "en" ? "github.com" : "mon GitHub";
  const secretLabel =
    language === "en" ? "secret.com" : "secret.com"; // tu peux changer ça si tu veux
  // --------------------------------

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:lukas.blanchot@hotmail.fr">{mailLabel}</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/lukasblanchot/">{linkedinLabel}</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Silenixx">{githubLabel}</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/secret.png")} alt="Secret icon" />
          <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">{secretLabel}</a>
        </li>
      </ul>
    </footer>
  );
};
