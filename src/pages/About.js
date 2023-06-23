import React from "react";
import HeaderNav from "../components/HeaderNav";
import cv from "../assets/images/cv.png";

const About = () => {
  return (
    <div className="about">
      <HeaderNav />
      <section className="about__container">
        <div className="about__container__left">
          <div className="about__container__left__text">
            <div className="about__container__left__text__title">
              {/* <span>*</span>  */}
              <h2>À propos</h2>
            </div>
            <p className="about__container__left__text__para">
              Thomas Le Cam, Développeur web front-end, intéressé par l’UX/UI et
              le design. Je suis passionné de musique et constamment désireux
              d'apprendre des nouvelles technologies d'explorer de nouvelles
              opportunités.
            </p>
            <p className="about__container__left__text__link">
              ↓ curriculum vitae
            </p>
          </div>
        </div>
        <div className="about__container__right">
          <div className="about__container__right__cv">
            <img src={cv} alt="cv" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
