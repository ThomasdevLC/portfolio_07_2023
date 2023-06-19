import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";
import pic from "../assets/images/pic.png";
import worklist from "../works/worklistData";

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
      <HeaderNav />

      <div className="home__content">
        <div className="home__intro">
          <div className="home__intro__pic">
            <img src={pic} alt="photo" />
          </div>
          <h1 className="home__intro__name">Thomas Le Cam</h1>
          <h2 className="home__intro__position">Développeur web</h2>
          <p className="home__intro__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            laborum minus dolores aperiam esse nostrum voluptas est
            consequuntur, veniam praesentium beatae nisi obcaecati quia
            reiciendis recusandae soluta ea harum placeat labore atque adipisci
            qui. Sunt commodi perferendis.
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
          <div className=" home__works__container">
            {worklist.map((item) => (
              <NavLink
                to={`/${item.link}`}
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
