import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import PreventContext from "../../context/PreventContext";
import worklist from "../../worklist/worklistData";

const WorksLinks = () => {
  const [showImageBox, setShowImageBox] = useState(false);
  const { preventAnim } = useContext(PreventContext);
  const Element = !preventAnim ? motion.div : "div";

  useEffect(() => {
    if (!preventAnim) {
      const timeout = setTimeout(() => {
        setShowImageBox(true);
      }, 2800);
      return () => clearTimeout(timeout);
    } else {
      setShowImageBox(true);
    }
  }, []);

  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {
      top: "-32px",
      // backgroundColor: "#FFAF87",
      backgroundColor: "#fdff87",
      duration: 0.4,
    });
  };

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "white",
      duration: 0.4,
      delay: 0.1,
    });
  };

  return (
    <div className="workslinks">
      {worklist.map((project, index) => {
        return (
          <NavLink to={`/${project.link}/${project.id}`} key={project.id}>
            <Element
              className="workslinks__box"
              initial={{ opacity: 0, y: 2500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.5,
                delay: index * 0.1,
                ease: [0.22, 1, 1, 1],
              }}
              onMouseEnter={(e) => {
                manageMouseEnter(e, index);
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e, index);
              }}
              key={index}
            >
              <p className="workslinks__box__name">{project.title}</p>
              <div className="workslinks__box__tag">
                {project.tags.map((tag, index) => (
                  <span key={index} className="workslinks__box__tag__name">
                    {tag}
                  </span>
                ))}
              </div>

              {showImageBox && (
                <div className="workslinks__box__imagebox">
                  <img
                    className="workslinks__box__image"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              )}
            </Element>
          </NavLink>
        );
      })}
    </div>
  );
};

export default WorksLinks;
