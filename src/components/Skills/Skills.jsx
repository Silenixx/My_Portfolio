import React from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../context/LanguageContext";

// — JSON EN —
import languagesEn from "../../data/en/languageskills.json";
import frameworksBackendEn from "../../data/en/frameworkskillsbackend.json";
import frameworksFrontendEn from "../../data/fr/frameworkskillsfrontend.json";
import databasesEn from "../../data/en/databaseskills.json";
import spokenEn from "../../data/en/spokenlanguageskills.json";
import bonusEn from "../../data/en/bonusskills.json";

// — JSON FR —
import languagesFr from "../../data/fr/languageskills.json";
import frameworksBackendFr from "../../data/fr/frameworkskillsbackend.json";
import frameworksFrontendFr from "../../data/fr/frameworkskillsfrontend.json";
import databasesFr from "../../data/fr/databaseskills.json";
import spokenFr from "../../data/fr/spokenlanguageskills.json";
import bonusFr from "../../data/fr/bonusskills.json";

export const Skills = () => {
  const { language } = useLanguage();

  // Sélection des bons fichiers JSON selon la langue
  const languages = language === "en" ? languagesEn : languagesFr;
  const frameworksBackend = language === "en" ? frameworksBackendEn : frameworksBackendFr;
  const frameworksFrontend = language === "en" ? frameworksFrontendEn : frameworksFrontendFr;
  const databases = language === "en" ? databasesEn : databasesFr;
  const spoken = language === "en" ? spokenEn : spokenFr;
  const bonus = language === "en" ? bonusEn : bonusFr;

  // Titres sous ton contrôle
  const title = language === "en" ? "Skills" : "Compétences";
  const tLanguages =
    language === "en" ? "Programming languages (and others)" : "Langages de programmation (et autres)";
  const tFrameworksBackend = language === "en" ? "Frameworks Backend" : "Frameworks Backend";
  const tFrameworksFrontend = language === "en" ? "Frameworks Frontend" : "Frameworks Frontend";
  const tDatabases = language === "en" ? "Database" : "Bases de données";
  const tSpoken = language === "en" ? "Spoken languages" : "Langues parlées";
  const tBonus = language === "en" ? "Other skills" : "Autres compétences";

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        <div className={styles.skills}>

          {/* Programming languages */}
          <h4 className={styles.titleSectionSkills}>{tLanguages}</h4>
          {languages.map((item, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(item.imageSrc)} alt={item.title} />
              </div>
              <p>{item.title}</p>
            </div>
          ))}

          {/* Framework */}
          <h4 className={styles.titleSectionSkills}>{tFrameworksBackend}</h4>
          {frameworksBackend.map((item, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(item.imageSrc)} alt={item.title} />
              </div>
              <p>{item.title}</p>
            </div>
          ))}

          <h4 className={styles.titleSectionSkills}>{tFrameworksFrontend}</h4>
          {frameworksFrontend.map((item, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(item.imageSrc)} alt={item.title} />
              </div>
              <p>{item.title}</p>
            </div>
          ))}

          {/* Database */}
          <h4 className={styles.titleSectionSkills}>{tDatabases}</h4>
          {databases.map((item, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(item.imageSrc)} alt={item.title} />
              </div>
              <p>{item.title}</p>
            </div>
          ))}

          {/* Spoken languages */}
          <h4 className={styles.titleSectionSkills}>{tSpoken}</h4>
          {spoken.map((item, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(item.imageSrc)} alt={item.title} />
              </div>
              <p>{item.title}</p>
            </div>
          ))}

          {/* Bonus skills (optionnel) */}
          {/* 
          <h4 className={styles.titleSectionSkills}>{tBonus}</h4>
          {bonus.map((item, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(item.imageSrc)} alt={item.title} />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
          */}
        </div>
      </div>
    </section>
  );
};
