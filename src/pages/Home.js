import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import worklist from "../worklist/worklistData";
import WorksIntro from "../components/Home/WorkIntro";
import MyIntro from "../components/Home/MyIntro";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.div
      className="home"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="home__content">
        <div className="home__intro">
          <MyIntro />
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
              <WorksIntro />
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
                  <AnimatePresence>
                    {item.tags.map(
                      (tag, index) =>
                        selectedTags.includes(tag) && (
                          <motion.span
                            key={tag}
                            className="home__works__taglist__tag"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {tag}
                          </motion.span>
                        )
                    )}
                  </AnimatePresence>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
