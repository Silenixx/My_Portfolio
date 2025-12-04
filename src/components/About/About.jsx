import React, { useState } from "react";
import classNames from "classnames";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../context/LanguageContext";

export const About = () => {
  const [isRotated, setIsRotated] = useState(false);
  const { language } = useLanguage();

  const handleImageClick = () => {
    setIsRotated((prevState) => !prevState);
  };

  const imageClass = classNames(styles.aboutImage, {
    [styles.rotated]: isRotated,
  });

  // ➤ TU écris TOUS les textes toi-même ici :
  const title = language === "en" ? "About" : "À propos";

  const sections = [
    {
      icon: "about/cursorIcon.png",
      title: language === "en" ? "Frontend Developer" : "Développeur Frontend",
      text:
        language === "en"
          ? "I'm a frontend developer with experience in building responsive and optimized sites"
          : "Je suis développeur frontend avec de l’expérience dans la création de sites web responsives et optimisés",
    },
    {
      icon: "about/serverIcon.png",
      title: language === "en" ? "Backend Developer" : "Développeur Backend",
      text:
        language === "en"
          ? "I have experience developing fast and optimised back-end systems and APIs"
          : "J’ai de l’expérience dans le développement d’APIs et de systèmes backend rapides et optimisés",
    },
    {
      icon: "about/cursorIcon.png",
      title: language === "en" ? "UI Designer" : "Designer UI",
      text:
        language === "en"
          ? "I have designed multiple landing pages and have created design systems as well"
          : "J’ai conçu plusieurs landing pages et créé des design systems",
    },
  ];
  // ------------------------------

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={imageClass}
          onClick={handleImageClick}
        />

        <ul className={styles.aboutItems}>
          {sections.map((item, index) => (
            <li key={index} className={styles.aboutItem}>
              <img src={getImageUrl(item.icon)} alt="Section icon" />
              <div className={styles.aboutItemText}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
