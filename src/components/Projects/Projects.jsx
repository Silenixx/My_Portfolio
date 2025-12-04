import React from "react";
import styles from "./Projects.module.css";

import { useLanguage } from "../../context/LanguageContext";

// JSON EN / FR
import projectsEn from "../../data/en/projects.json";
import projectsFr from "../../data/fr/projects.json";

import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const { language } = useLanguage();

  // Sélection du bon JSON
  const projects = language === "en" ? projectsEn : projectsFr;

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>
        {language === "en" ? "Projects" : "Projets"}
      </h2>

      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
