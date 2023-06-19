import React from "react";
import { NavLink } from "react-router-dom";
// import video from "../../../assets/videos/groupomania-video.mp4";

const Groupomania = () => {
  return (
    <section className="container">
      <h1 className="container__title">GROUPOMANIA</h1>
      <NavLink to="/">
        <div className="container__backpage"> &#x2191; PORTFOLIO</div>
      </NavLink>
      <div className="project">
        <p className="project__pitch">
          Dans le cadre d'un des projet Openclassrooms, il était demandé
          d'intégrer le design d'une maquette figma avec la technologie
          React.js. Ce projet fut ma première application React.js avec
          l'utilisation de react-router et typescript.
        </p>
        <div className="project__mission">
          <div className="project__mission__description">
            <div className="project__mission__description__block">
              <h2 className="project__mission__description__block__title">
                DATE
              </h2>
              <p className="project__mission__description__block__text">
                Octobre 2022
              </p>
            </div>
            <div className="project__mission__description__block">
              <h2 className="project__mission__description__block__title">
                STACK
              </h2>
              <p className="project__mission__description__block__text">
                <ul>
                  <li>React</li>
                  <li>Node</li>
                  <li>Mongo DB</li>
                  <li>Sass</li>
                </ul>
              </p>
            </div>
            <div className="project__mission__description__block">
              <h2 className="project__mission__description__block__title">
                URL
              </h2>
              <p className="project__mission__description__block__text">
                test@dev.com
              </p>
            </div>
          </div>
          <p className="project__mission__text">
            Le site de Kasa a été codé il y a maintenant plus de 10 ans en
            ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé
            une refonte totale pour passer à une stack complète en JavaScript
            avec NodeJS côté Back-end, et React côté Front-end. Kasa en a
            également profité pour commander de nouvelles maquettes auprès de
            son designer habituel, qui est en freelance
          </p>
        </div>
      </div>
      {/* <img
        className="container__logo"
        src={logo}
        alt="video site groupomania"
      /> */}
      {/* <video
        className="container__video"
        width="100%"
        src={video}
        type="video/mp4"
        loop
        autoPlay
      ></video> */}
    </section>
  );
};

export default Groupomania;
