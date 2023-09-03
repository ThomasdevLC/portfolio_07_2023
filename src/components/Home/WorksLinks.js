import React, { useRef, useContext } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import PreventContext from "../../context/PreventContext";
import worklist from "../../worklist/worklistData";

const WorksLinks = () => {
  const { preventAnim } = useContext(PreventContext);
  const Element = !preventAnim ? motion.div : "div";

  const imgBoxRefs = useRef([]);
  const workLinkRefs = useRef([]);

  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {
      top: "-32px",
      backgroundColor: "#fdff87",
      duration: 0.4,
    });

    const imgBox = imgBoxRefs.current[index];
    gsap.set(imgBox, {
      xPercent: 60,
      yPercent: 50,
      rotation: -15,
      delay: 0.1,
    });

    gsap.to(imgBox, {
      opacity: 1,
      scale: 1,
      yPercent: -50,
      // yPercent: -67,
      rotation: 5,
      delay: 0.1,
    });
  };

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "white",
      duration: 0.4,
      delay: 0.2,
    });

    const imgBox = imgBoxRefs.current[index];
    gsap.to(imgBox, {
      opacity: 0,
      yPercent: 30,
      xPercent: 25,
      scale: 0.8,
      rotation: -2,
      delay: 0.1,
      duration: 0.4,
      ease: "power3.inOut",
      delay: 0.2,
    });
  };

  const manageMouseMove = (e, index) => {
    const workLink = workLinkRefs.current[index];
    const imgBox = imgBoxRefs.current[index];

    const workLinkRect = workLink.getBoundingClientRect();
    const offsetX = Math.min(e.clientX - workLinkRect.left, 550);

    gsap.to(imgBox, {
      x: offsetX - workLinkRect.width / 2,
      duration: 0.9,
      ease: "power2.out",
    });
  };

  return (
    <div className="workslinks">
      {worklist.map((project, index) => {
        return (
          <NavLink to={`/${project.link}/${project.id}`} key={project.id}>
            <Element
              className="workslinks__box"
              ref={(el) => (workLinkRefs.current[index] = el)}
              initial={{ opacity: 0, y: 3500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.8,
                delay: index * 0.1,
                ease: [0.22, 1, 1, 1],
              }}
              onMouseEnter={(e) => {
                manageMouseEnter(e, index);
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e, index);
              }}
              onMouseMove={(e) => {
                manageMouseMove(e, index);
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

              <div
                className="workslinks__box__imgbox"
                ref={(im) => (imgBoxRefs.current[index] = im)}
              >
                <img
                  className="workslinks__box__img"
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </Element>
          </NavLink>
        );
      })}
    </div>
  );
};

export default WorksLinks;
