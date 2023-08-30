import React, { useContext, useRef } from "react";
import pic from "../../assets/images/pic.png";
import cv from "../../assets/pdf/cv.pdf";
import { motion } from "framer-motion";
import PreventContext from "../../context/PreventContext";
import LangContext from "../../context/LangContext";
import ClickedLangContext from "../../context/ClickedLangContext";
import homeFr from "../../data/homeText/homeFr";
import homeEn from "../../data/homeText/homeEn";

const MyIntro = () => {
  const { preventAnim } = useContext(PreventContext);
  const { clickedLang } = useContext(ClickedLangContext);
  const Element = !preventAnim ? motion.div : "div";
  const { switchLang } = useContext(LangContext);

  const positionRef = useRef(null);
  const textRef = useRef(null);

  if (clickedLang === "click") {
    const positionElement = positionRef.current;
    gsap.fromTo(
      positionElement,
      { y: 40 },
      { duration: 0.8, y: 0, ease: "power2.out", delay: 0.6 }
    );
    const textElement = textRef.current;
    gsap.fromTo(
      textElement,
      { y: 170 },
      { duration: 0.8, y: 0, ease: "power2.out", delay: 0.2 }
    );
  }

  return (
    <div className="intro-container">
      <Element
        initial={{ y: 250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="home__intro"
      >
        <div className="home__intro__pic">
          <img src={pic} alt="photo" />
        </div>
        <h1 className="home__intro__name">THOMAS LE CAM</h1>

        <h2 className="home__intro__position">
          <p ref={positionRef}>
            {switchLang === "fr" ? homeFr.position : homeEn.position}
          </p>
        </h2>
        <div className="home__intro__text">
          <p ref={textRef}>
            {" "}
            {switchLang === "fr" ? homeFr.intro : homeEn.intro}
          </p>
        </div>

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
    </div>
  );
};

export default MyIntro;
