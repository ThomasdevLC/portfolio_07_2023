import React, { useEffect, useContext, useRef } from "react";
import PreventContext from "../../context/PreventContext";
import homeFr from "../../data/homeText/homeFr";
import homeEn from "../../data/homeText/homeEn";
import LangContext from "../../context/LangContext";
import ClickedLangContext from "../../context/ClickedLangContext";
import SvgModule from "../../svg/SvgModule.js";
import "../../svg/SvgModule.scss";

const WorksTitle = () => {
  const { switchLang } = useContext(LangContext);
  const { clickedLang } = useContext(ClickedLangContext);
  const { preventAnim } = useContext(PreventContext);

  const titleRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    if (!preventAnim) {
      gsap.fromTo(
        titleElement,
        { y: -180 },
        { duration: 0.8, y: 0, ease: "power2.out", delay: 2.6 }
      );
    }
  }, []);

  if (clickedLang === "click") {
    const titleElement = titleRef.current;
    gsap.fromTo(
      titleElement,
      { y: -180 },
      { duration: 1, y: 0, ease: "power2.out", delay: 0.2 }
    );
  }
  return (
    <div className="">
      <div className="svgBox">
        <SvgModule />
      </div>
      <div className="workstitle">
        <div className="workstitle__container">
          <p className="workstitle__container__text" ref={titleRef}>
            {switchLang === "fr" ? homeFr.title : homeEn.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorksTitle;
