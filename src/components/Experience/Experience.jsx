import React from "react";

import styles from "./Experience.module.css";
import history from "../../data/en/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
                loading="lazy"
                decoding="async"
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
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
