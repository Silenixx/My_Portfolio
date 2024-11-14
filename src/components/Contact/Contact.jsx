import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:lukas.blanchot@hotmail.fr">lukas.blanchot@hotmail.fr</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/lukasblanchot">linkedin.com/lukasblanchot</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Silenixx">github.com/Silenixx</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/secret.png")} alt="Github icon" />
          <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">secret.com/Silenix</a>
        </li>
      </ul>
    </footer>
  );
};
