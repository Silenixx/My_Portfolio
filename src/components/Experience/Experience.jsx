import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../context/LanguageContext";

// ⚠️ On importe les deux JSON ici
import historyEn from "../../data/en/history.json";
import historyFr from "../../data/fr/history.json";

export const Experience = () => {
  const { language } = useLanguage();

  // Sélection propre du fichier
  const history = language === "en" ? historyEn : historyFr;

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>
        {language === "en" ? "Experience" : "Expérience"}
      </h2>

      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
                loading="lazy"
              />

              <div className={styles.historyItemDetails}>
                <h3>
                  {historyItem.role}, {historyItem.organisation}
                </h3>

                <p>
                  <time>{historyItem.startDate}</time> –{" "}
                  <time>{historyItem.endDate}</time>
                </p>

                <ul>
                  {historyItem.experiences.map((exp, idx) => (
                    <li key={idx}>{exp}</li>
                  ))}
                </ul>

                {/* 🔥 Technologies (badges) */}
                {historyItem.technologies && (
                  <div className={styles.techList}>
                    {historyItem.technologies.map((tech, index) => (
                      <span key={index} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
