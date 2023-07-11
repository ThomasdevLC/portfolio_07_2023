import React from "react";
import WorksComponent from "../../components/WorksComponent";
import BackBtn from "../../components/works/BackBtn";
import transition from "../../utils/transitions";

const Portfolio = () => {
  return (
    <div>
      <BackBtn />
      <WorksComponent />
    </div>
  );
};

export default transition(Portfolio);
