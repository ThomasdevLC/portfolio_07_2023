import React, { useContext } from "react";
import pic from "../../assets/images/pic.png";
import cv from "../../assets/pdf/cv.pdf";
import { motion } from "framer-motion";
import PreventContext from "../../context/PreventContext";

const MyIntro = () => {
  const { preventAnim } = useContext(PreventContext);
  const Element = !preventAnim ? motion.div : "div";

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
      <h1 className="home__intro__name">Thomas Le Cam</h1>
      <h2 className="home__intro__position">Développeur web</h2>
      <p className="home__intro__text">
        Je créé des sites et applications dans différents environnements tels
        que React, Vue.js et Node.js. <br /> Attentif à l'UX/UI, je m'applique à
        proposer les meilleurs expériences possibles.
      </p>
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
