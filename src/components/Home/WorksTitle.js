import React, { useState, useEffect, useContext, useRef } from "react";
import { PreventContext } from "../../context/PreventContext";
import { LangContext } from "../../context/LangContext";
import homeFr from "../../data/homeText/homeFr";
import homeEn from "../../data/homeText/homeEn";
import SvgModule from "../../svg/SvgModule.js";
import "../../svg/SvgModule.scss";

const WorksTitle = () => {
  const { preventAnim } = useContext(PreventContext);
  const { switchLang } = useContext(LangContext);
  const [prevSwitchLang, setPrevSwitchLang] = useState(switchLang);

  const titleRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    if (!preventAnim) {
      gsap.fromTo(
        titleElement,
        { y: 180 },
        { duration: 1, y: 0, ease: "power2.out", delay: 2 }
      );
    }
  }, []);

  useEffect(() => {
    if (prevSwitchLang !== switchLang) {
      const titleElement = titleRef.current;
      gsap.fromTo(
        titleElement,
        { y: -180 },
        { duration: 0.8, y: 0, ease: "power2.out", delay: 0.2 }
      );
    }
    setPrevSwitchLang(switchLang);
  }, [switchLang, prevSwitchLang]);

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
