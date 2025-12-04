import React from "react";
import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../context/LanguageContext";

// On importe les deux versions du JSON
import educationEn from "../../data/en/education.json";
import educationFr from "../../data/fr/education.json";

export const Education = () => {
  const { language } = useLanguage();

  // On sélectionne le bon fichier JSON
  const education = language === "en" ? educationEn : educationFr;

  // Tu gères toi-même les textes FR/EN dans les JSON
  const title = language === "en" ? "Education" : "Éducation";

  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.content}>
        <ul className={styles.education}>
          {education.map((educationItem, id) => (
            <li key={id} className={styles.educationItem}>
              
              {/* Logo */}
              <div className={styles.educationItemLogo}>
                <img
                  src={getImageUrl(educationItem.imageSrc)}
                  alt={`${educationItem.school} Logo`}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Contenu */}
              <div className={styles.educationItemContent}>

                <div className={styles.educationHeader}>

                  {/* Ligne programme + niveau */}
                  <div className={styles.programLine}>
                    <h3 className={styles.program}>{educationItem.program}</h3>

                    {educationItem.level && (
                      <span className={styles.level}>
                        {educationItem.degreeStatus === "in progress"
                          ? (language === "en"
                              ? `${educationItem.level} soon`
                              : `${educationItem.level} bientôt`)
                          : educationItem.level}
                      </span>
                    )}
                  </div>

                  {/* Ligne école + dates */}
                  <div className={styles.metaLine}>
                    <span className={styles.school}>{educationItem.school}</span>
                    <span className={styles.date}>
                      <time>{educationItem.startDate}</time> –{" "}
                      <time>{educationItem.endDate}</time>
                    </span>
                  </div>
                </div>

                {/* Liste des compétences */}
                {educationItem.acquiredSkills &&
                  educationItem.acquiredSkills.length > 0 && (
                    <ul className={styles.skillsList}>
                      {educationItem.acquiredSkills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};




// import React from "react";

// import styles from "./Education.module.css";
// import education from "../../data/education.json";
// import { getImageUrl } from "../../utils";

// export const Education = () => {
//   return (
//     <section className={styles.container} id="education">
//       <h2 className={styles.title}>Education</h2>
//       <div className={styles.content}>
//         <ul className={styles.education}>
//           {education.map((educationItem, id) => (
//             <li key={id} className={styles.educationItem}>
//               {/* Logo de l'école */}
//               <div className={styles.educationItemLogo}>
//                 <img
//                   src={getImageUrl(educationItem.imageSrc)}
//                   alt={`${educationItem.school} Logo`}
//                 />
//               </div>

//               {/* Contenu de la formation */}
//               <div className={styles.educationItemContent}>
//                 <div className={styles.educationHeader}>
//                   <div className={styles.programLine}>
//                     <h3 className={styles.program}>{educationItem.program}</h3>
//                     {educationItem.level && (
//                       <span className={styles.level}>
//                         {educationItem.degreeStatus === "in progress" ? `${educationItem.level} soon` : educationItem.level}
//                       </span>
//                     )}
//                   </div>
//                   <div className={styles.metaLine}>
//                     <span className={styles.school}>{educationItem.school}</span>
//                     <span className={styles.date}>
//                       {educationItem.startDate} – {educationItem.endDate}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Liste des compétences */}
//                 {educationItem.acquiredSkills && (
//                   <ul className={styles.skillsList}>
//                     {educationItem.acquiredSkills.map((skill, i) => (
//                       <li key={i}>{skill}</li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };
