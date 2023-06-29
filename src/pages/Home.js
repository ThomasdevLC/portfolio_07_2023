import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import pic from "../assets/images/pic.png";
import arrow from "../assets/images/arrow.png";
import background from "../assets/images/background.jpg";
import worklist from "../worklist/worklistData";

const Home = () => {
  const tags = ["React", "Vue", "NodeJs", "Sass", "Figma", "Framer-Motion"];

  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="home">
      <div className="home__content">
        <div className="home__intro">
          <div className="home__intro__pic">
            <img src={pic} alt="photo" />
          </div>
          <h1 className="home__intro__name">Thomas Le Cam</h1>
          <h2 className="home__intro__position">Développeur web</h2>
          <p className="home__intro__text">
            Je créé des sites et applications dans différents environnements
            tels que React, Vue.js et Node.js. <br /> Attentif à l'UX/UI, je
            m'efforce de créer les meilleurs expériences utilisateur possibles.
          </p>
          <p className="home__intro__city">Montpellier</p>
          <p className="home__intro__contact">
            06 43 84 36 32 <br />
            thomas.lecam@gmail.com
          </p>
          <div className="home__intro__socials">
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-regular fa-envelope"></i>
          </div>
          <p className="home__intro__cv"> MON CV</p>
        </div>
        <div className="home__works">
          <div className="home__works__tags">
            <h3 className="home__works__tags__title">Tags</h3>
            {tags.map((tag) => (
              <p key={tag.id} className="home__works__tags__name  ">
                <span
                  onClick={() => handleTagClick(tag)}
                  className={selectedTags.includes(tag) ? "selected" : ""}
                >
                  {tag}
                </span>{" "}
                /
              </p>
            ))}
          </div>
          <div className=" home__works__container ">
            <div className="home__works__container__intro  work-0">
              <div className="home__works__container__intro__title">
                <div className="home__works__container__intro__title__arrow">
                  {" "}
                  {/* <img src={arrow} alt="flèche droite" /> */}
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
                Je créé des sites et applications dans différents environnements
                tels que React, Vue.js et Node.js. Attentif à l'UX/UI, je
                m'efforce de créer les meilleurs expériences utilisateur
                possibles. Attentif à l'UX/UI, je m'efforce de créer les
                meilleurs expériences utilisateur possibles
              </p>
            </div>
            {worklist.map((item) => (
              <NavLink
                to={`/${item.link}/${item.id}`}
                key={item.id}
                className={`work work-${item.id} overlay`}
              >
                <img
                  className="home__works__image"
                  src={item.image}
                  alt={item.title}
                />
                <div className="home__works__text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>{item.period}</p>
                </div>
                <div className="home__works__taglist">
                  {item.tags.map(
                    (tag) =>
                      selectedTags.includes(tag) && (
                        <span key={tag} className="home__works__taglist__tag">
                          {tag}
                        </span>
                      )
                  )}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
