import React from "react";
import pic from "../../assets/images/pic.png";
import { motion, AnimatePresence } from "framer-motion";

const MyIntro = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="home__intro__pic">
        <img src={pic} alt="photo" />
      </div>
      <h1 className="home__intro__name">Thomas Le Cam</h1>
      <h2 className="home__intro__position">Développeur web</h2>
      <p className="home__intro__text">
        Je créé des sites et applications dans différents environnements tels
        que React, Vue.js et Node.js. <br /> Attentif à l'UX/UI, je m'efforce de
        créer les meilleurs expériences utilisateur possibles.
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

      <p className="home__intro__cv"> MON CV</p>
    </motion.div>
  );
};

export default MyIntro;
