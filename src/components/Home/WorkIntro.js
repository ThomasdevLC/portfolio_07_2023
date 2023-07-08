import React, { useEffect, useRef } from "react";
import SplitType from "split-type";

const WorkIntro = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    const arrowElement = arrowRef.current;

    gsap.fromTo(
      arrowElement,
      {
        x: -20, // Initial position off-screen to the left
        opacity: 0, // Initial opacity of 0
      },
      {
        x: 0, // Final position at 0 (visible)
        opacity: 1, // Final opacity of 1 (fully visible)
        duration: 1, // Duration of the animation
        ease: ["elastic"], // Less pronounced elastic ease effect
        delay: 1.2,
      }
    );

    const title = SplitType.create(
      ".home__works__container__intro__title__name__projects"
    );
    const splitTitle = title.chars;

    gsap.from(splitTitle, {
      opacity: 0.1, // Initial opacity of 0.5
      duration: 0.3, // Duration of the animation
      stagger: 0.2, // Stagger the animation by 0.1 seconds between each character
      ease: "power2.inOut", // Easing function for the animation
      delay: 1.4,
    });
  }, []);

  return (
    <div>
      <div className="home__works__container__intro__title">
        <div className="home__works__container__intro__title__arrow">
          {" "}
          <i class="fa-solid fa-arrow-right" ref={arrowRef}></i>
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

export default WorkIntro;
