import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import worklist from "../../worklist/worklistData";
import { motion } from "framer-motion";

const WorksLinks = () => {
  const [showImageBox, setShowImageBox] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImageBox(true);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {
      top: "-32px",
      backgroundColor: "#FFAF87",
      // backgroundColor: "#FFC387",
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
            <motion.div
              className="workslinks__box"
              initial={{ opacity: 0, y: 2500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
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
            </motion.div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default WorksLinks;
