import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../context/LanguageContext";
import { ProjectModal } from "./ProjectModal";

export const ProjectCard = ({ project }) => {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

  const demoLabel = language === "en" ? "Demo" : "Démo";
  const detailsLabel = language === "en" ? "Details" : "Détails";

  const { title, imageSrc, description, skills, demo, longDescription } = project;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={getImageUrl(imageSrc)} className={styles.image} />
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.bottomZone}>
          <ul className={styles.skills}>
            {skills.map((s, i) => (
              <li key={i} className={styles.skill}>{s}</li>
            ))}
          </ul>

          {/* 🔥 Nouveau bloc de boutons propres */}
          <div className={styles.actions}>
            <a href={demo} className={styles.btnDemo}>{demoLabel}</a>
            <button className={styles.btnDetails} onClick={() => setOpen(true)}>
              {detailsLabel}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <ProjectModal
          title={title}
          description={longDescription}
          skills={skills}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};
