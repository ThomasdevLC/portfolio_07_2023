import React, { useContext, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import pic from "../../assets/images/pic.png";
import cvfr from "../../assets/pdf/cvfr.pdf";
import cven from "../../assets/pdf/cven.pdf";
import WorksTitleResp from "../../components/Home/WorksTitleResp";
import { PreventContext } from "../../context/PreventContext";
import { LangContext } from "../../context/LangContext";
import homeFr from "../../data/homeText/homeFr";
import homeEn from "../../data/homeText/homeEn";

const MyIntro = () => {
  const { preventAnim } = useContext(PreventContext);
  const { switchLang } = useContext(LangContext);
  const [prevSwitchLang, setPrevSwitchLang] = useState(switchLang);
  const Element = !preventAnim ? motion.div : "div";

  const positionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (prevSwitchLang !== switchLang) {
      const positionElement = positionRef.current;
      gsap.fromTo(positionElement, { y: -40 }, { duration: 0.8, y: 0, ease: "power2.out", delay: 0.2 });
      const textElement = textRef.current;
      gsap.fromTo(textElement, { y: 170 }, { duration: 0.8, y: 0, ease: "power2.out", delay: 0.2 });
    }

    setPrevSwitchLang(switchLang);
  }, [switchLang, prevSwitchLang]);

  return (
    <div className="intro-main">
      <div className="intro-container">
        <Element initial={{ y: 250, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.4 }} className="home__intro">
          <div className="home__intro__pic">
            <img src={pic} alt="photo" />
          </div>
          <h1 className="home__intro__name">THOMAS LE CAM</h1>

          <h2 className="home__intro__position">
            <p ref={positionRef}>{switchLang === "fr" ? homeFr.position : homeEn.position}</p>
          </h2>
          <div className="home__intro__text">
            <p ref={textRef}> {switchLang === "fr" ? homeFr.intro : homeEn.intro}</p>
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
            <a className="header__cvbox__cv " href={switchLang === "fr" ? cvfr : cven} target="_blank" rel="noreferrer">
              {switchLang === "fr" ? "MON CV" : "MY CV"}
            </a>
          </div>
        </Element>
      </div>

      <div className="resp-title">
        <WorksTitleResp />
      </div>
    </div>
  );
};

export default MyIntro;
