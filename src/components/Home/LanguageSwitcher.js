import React, { useContext, useState } from "react";
import fr from "../../assets/images/fr.png";
import uk from "../../assets/images/uk.png";
import { LangContext } from "../../context/LangContext";

const LanguageSwitcher = () => {
  const { switchLang, setSwitchLang } = useContext(LangContext);
  const [canToggle, setCanToggle] = useState(true);

  const toggleLanguage = () => {
    if (canToggle) {
      setSwitchLang((switchLang) => (switchLang === "fr" ? "en" : "fr"));
      setCanToggle(false);

      setTimeout(() => {
        setCanToggle(true);
      }, 1000);
    }
  };

  return (
    <nav className="lang" onClick={() => toggleLanguage()}>
      <ul className="lang__nav">
        <div
          className={`lang__nav__btn ${
            switchLang === "en" ? "lang__nav__mode-selected" : ""
          }`}
        >
          <img src={fr} alt="photo" />
        </div>
        <li
          className={`lang__nav__mode ${
            switchLang === "en" ? "lang__nav__mode-selected" : ""
          }`}
        >
          FR
        </li>
        <li
          className={`lang__nav__mode ${
            switchLang === "fr" ? "lang__nav__mode-selected" : ""
          }`}
        >
          EN
        </li>
        <div
          className={`lang__nav__btn ${
            switchLang === "fr" ? "lang__nav__mode-selected" : ""
          }`}
        >
          <img src={uk} alt="photo" />
        </div>
      </ul>
    </nav>
  );
};

export default LanguageSwitcher;
