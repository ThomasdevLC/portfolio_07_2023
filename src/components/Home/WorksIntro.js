import React from "react";

const worksIntro = () => {
  return (
    <div>
      <div className="home__works__container__intro__title">
        <div className="home__works__container__intro__title__arrow">
          {" "}
          <i class="fa-solid fa-arrow-right"></i>
        </div>

        <div className="home__works__container__intro__title__name">
          <span className="home__works__container__intro__title__name__projects">
            Projets
          </span>
        </div>
      </div>

      <div className="home__works__container__intro__date">
        <div className="home__works__container__intro__date__space"></div>
        <div className="home__works__container__intro__date__years">
          <span className="home__works__container__intro__date__years__text">
            2022 - 2023
          </span>
        </div>
      </div>
      <p className="home__works__container__intro__text">
        Je créé des sites et applications dans différents environnements tels
        que React, Vue.js et Node.js. Attentif à l'UX/UI, je m'efforce de créer
        les meilleurs expériences utilisateur possibles. Attentif à l'UX/UI, je
        m'efforce de créer les meilleurs expériences utilisateur possibles
      </p>
    </div>
  );
};

export default worksIntro;
