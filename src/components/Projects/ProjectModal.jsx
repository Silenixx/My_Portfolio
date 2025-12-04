import React from "react";
import styles from "./ProjectModal.module.css";

export const ProjectModal = ({ title, description, skills, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>

        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        <h2 className={styles.title}>{title}</h2>

        {/* 🔥 HTML rendu correctement ici */}
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <h3 className={styles.subTitle}>Technologies utilisées :</h3>

        <ul className={styles.skills}>
          {skills.map((s, i) => (
            <li key={i} className={styles.skill}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
