import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../context/LanguageContext";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Lukas's Portfolio
      </a>

      <div className={styles.menu}>

        {/* --- Switch de langue --- */}
        <button className={styles.langSwitch} onClick={toggleLanguage}>
          {language === "en" ? "FR" : "EN"}
        </button>

        {/* --- Bouton burger mobile --- */}
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        {/* --- Menu principal --- */}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">
              {language === "en" ? "About" : "À propos"}
            </a>
          </li>

          <li>
            <a href="#experience">
              {language === "en" ? "Experience" : "Expérience"}
            </a>
          </li>

          <li>
            <a href="#skills">
              {language === "en" ? "Skills" : "Compétences"}
            </a>
          </li>

          <li>
            <a href="#education">
              {language === "en" ? "Education" : "Éducation"}
            </a>
          </li>

          <li>
            <a href="#contact">
              {language === "en" ? "Contact" : "Contact"}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
