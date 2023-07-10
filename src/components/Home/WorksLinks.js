import React from "react";
import { NavLink } from "react-router-dom";
import worklist from "../../worklist/worklistData";

const WorksLinks = () => {
  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {
      top: "-2vw",
      backgroundColor: "#FF7070",
      duration: 0.3,
    });
  };

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "white",
      duration: 0.3,
      delay: 0.1,
    });
  };

  return (
    <div className="workslinks">
      {worklist.map((item, index) => {
        return (
          <NavLink to={`/${item.link}/${item.id}`} key={item.id}>
            <div
              className="workslinks__box"
              onMouseEnter={(e) => {
                manageMouseEnter(e, index);
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e, index);
              }}
              key={index}
            >
              <p className="workslinks__box__name">{item.title}</p>
              <div className="workslinks__box__tag">
                {item.tags.map((tag, index) => (
                  <span key={index} className="workslinks__box__tag__name">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default WorksLinks;
