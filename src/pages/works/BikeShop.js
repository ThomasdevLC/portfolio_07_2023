import React, { useContext } from "react";
import WorksComponent from "../../components/WorksComponent";
import BackBtn from "../../components/works/BackBtn";
import transition from "../../utils/transitions";
import { PreventContext } from "../../context/PreventContext";

const Portfolio = () => {
  const { setPreventAnim } = useContext(PreventContext);
  setPreventAnim(true);

  return (
    <div className="portfolio__container">
      <BackBtn />
      <WorksComponent />
    </div>
  );
};

export default transition(Portfolio);
