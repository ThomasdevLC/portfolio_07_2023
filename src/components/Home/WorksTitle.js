import React, { useEffect, useRef, useContext } from "react";
import SplitType from "split-type";
import PreventContext from "../../context/PreventContext";
import homeFr from "../../data/homeText/homeFr";
import homeEn from "../../data/homeText/homeEn";
import LangContext from "../../context/LangContext";
import SvgModule from "../../svg/SvgModule.js";
import "../../svg/SvgModule.css";

const WorksTitle = () => {
  const { switchLang } = useContext(LangContext);
  const { preventAnim } = useContext(PreventContext);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!preventAnim) {
      const titleElement = titleRef.current;
      gsap.fromTo(
        titleElement,
        { y: -180 },
        { duration: 1, y: 0, ease: "power2.out", delay: 2.6 }
      );
    }
  }, []);

  return (
    <div className="">
      <div className="svgBox">
        <SvgModule />
      </div>
      <div className="workstitle">
        <div className="workstitle__container">
          <p className="workstitle__container__text" ref={titleRef}>
            PROJETS 2022-2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorksTitle;
