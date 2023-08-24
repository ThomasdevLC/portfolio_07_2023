import React, { useContext } from "react";
import pic from "../../assets/images/pic.png";
import cv from "../../assets/pdf/cv.pdf";
import { motion } from "framer-motion";
import PreventContext from "../../context/PreventContext";
import homeFr from "../../data/homeText/homeFr";
import homeEn from "../../data/homeText/homeEn";
import LangContext from "../../context/LangContext";

const MyIntro = () => {
  const { preventAnim } = useContext(PreventContext);
  const Element = !preventAnim ? motion.div : "div";
  const { switchLang } = useContext(LangContext);

  return (
    <Element
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.4 }}
      className="home__intro"
    >
      <div className="home__intro__pic">
        <img src={pic} alt="photo" />
      </div>
      <h1 className="home__intro__name">THOMAS LE CAM</h1>

      {switchLang === "fr" ? (
        <h2 className="home__intro__position">{homeFr.position}</h2>
      ) : (
        <h2 className="home__intro__position">{homeEn.position}</h2>
      )}
      {switchLang === "fr" ? (
        <p className="home__intro__text">{homeFr.intro}</p>
      ) : (
        <p className="home__intro__text">{homeEn.intro}</p>
      )}

      <p className="home__intro__city">Montpellier</p>
      <p className="home__intro__contact">
        06 43 84 36 32 <br />
        thomas.lecam@gmail.com
      </p>
      <div className="home__intro__socials">
        <a href="https://www.linkedin.com/in/thomaslecam/" target="_blank">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/ThomasdevLC" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="mailto:thomas.lecam@gmail.com" target="_blank">
          <i className="fa-regular fa-envelope"></i>
        </a>
      </div>

      <div className="home__intro__cv">
        {" "}
        <a
          className="header__cvbox__cv "
          href={cv}
          target="_blank"
          rel="noreferrer"
        >
          MON CV
        </a>
      </div>
    </Element>
  );
};

export default MyIntro;
