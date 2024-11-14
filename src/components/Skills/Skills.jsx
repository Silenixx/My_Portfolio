import React from "react";

import styles from "./Skills.module.css";
import languageskills from "../../data/languageskills.json";
import frameworkskills from "../../data/frameworkskills.json";
import databaseskills from "../../data/databaseskills.json";
import spokenlanguageskills from "../../data/spokenlanguageskills.json";
import bonusskills from "../../data/bonusskills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <h4 className={styles.titleSectionSkills}>Programming languages</h4>
          {languageskills.map((languageskills, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(languageskills.imageSrc)} alt={languageskills.title} />
                </div>
                <p>{languageskills.title}</p>
              </div>
            );
          })}
          <h4 className={styles.titleSectionSkills}>Framework</h4>
          {frameworkskills.map((frameworkskills, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(frameworkskills.imageSrc)} alt={frameworkskills.title} />
                </div>
                <p>{frameworkskills.title}</p>
              </div>
            );
          })}
          <h4 className={styles.titleSectionSkills}>Database</h4>
          {databaseskills.map((databaseskills, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(databaseskills.imageSrc)} alt={databaseskills.title} />
                </div>
                <p>{databaseskills.title}</p>
              </div>
            );
          })}
          <h4 className={styles.titleSectionSkills}>Spoken languages</h4>
          {spokenlanguageskills.map((spokenlanguageskills, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(spokenlanguageskills.imageSrc)} alt={spokenlanguageskills.title} />
                </div>
                <p>{spokenlanguageskills.title}</p>
              </div>
            );
          })}
          <h4 className={styles.titleSectionSkills}>Other skills</h4>
          {bonusskills.map((bonusskills, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(bonusskills.imageSrc)} alt={bonusskills.title} />
                </div>
                <p>{bonusskills.title}</p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};
