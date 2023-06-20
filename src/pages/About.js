import React from "react";
import HeaderNav from "../components/HeaderNav";
import cv from "../assets/images/cv.png";

const About = () => {
  return (
    <div className="about">
      <HeaderNav />
      <section className="about__container">
        <div className="about__container__left">
          <div className="about__container__left__cv">
            <img src={cv} alt="cv" />
          </div>
        </div>
        <div className="about__container__right">
          <div className="about__container__right__text">
            <p>
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              eum officia voluptas quisquam est omnis a vitae hic
              exercitationem, recusandae optio sunt voluptatum nisi aspernatur
              possimus laboriosam libero consequuntur consectetur."
            </p>
          </div>
        </div>
        <div className="about__container__right"></div>
      </section>
    </div>
  );
};

export default About;
