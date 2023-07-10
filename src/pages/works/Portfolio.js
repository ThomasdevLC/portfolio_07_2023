import React from "react";
import WorksComponent from "../../components/WorksComponent";
import transition from "../../utils/transitions";

const Portfolio = () => {
  return (
    <div>
      <WorksComponent />
    </div>
  );
};

export default transition(Portfolio);
