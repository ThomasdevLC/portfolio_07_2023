import React, { useContext } from "react";
import PreventContext from "../../context/PreventContext";
import homeFr from "../../data/homeText/homeFr";
import homeEn from "../../data/homeText/homeEn";
import LangContext from "../../context/LangContext";
import ClickedLangContext from "../../context/ClickedLangContext";

import backgroundImage from "../../assets/images/header_background.jpg";

const WorksTitleResp = () => {
  const { switchLang } = useContext(LangContext);
  const { clickedLang } = useContext(ClickedLangContext);
  const { preventAnim } = useContext(PreventContext);

  return (
    <div className="workstitle">
      <div
        className="workstitle__container"
        // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <p className="workstitle__container__text">
          {switchLang === "fr" ? homeFr.title : homeEn.title}
        </p>
      </div>
    </div>
  );
};

export default WorksTitleResp;
