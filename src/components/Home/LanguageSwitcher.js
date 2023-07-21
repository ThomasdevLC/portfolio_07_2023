import React, { useContext } from "react";
import LangContext from "../../context/LangContext";

const LanguageSwitcher = () => {
  const { switchLang, setSwitchLang } = useContext(LangContext);

  const toggleLanguage = () => {
    setSwitchLang((switchLang) => (switchLang === "fr" ? "en" : "fr"));
  };

  return (
    <nav className="lang">
      <ul className="lang__nav">
        <li
          className={`lang__nav__mode ${
            switchLang === "fr" ? "lang__nav__mode-selected" : ""
          }`}
          onClick={toggleLanguage}
        >
          FR
        </li>
        <li
          className={`lang__nav__mode ${
            switchLang === "en" ? "lang__nav__mode-selected" : ""
          }`}
          onClick={toggleLanguage}
        >
          EN
        </li>
      </ul>
    </nav>
  );
};

export default LanguageSwitcher;
